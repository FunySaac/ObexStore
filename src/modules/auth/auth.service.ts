import {
  BadRequestException,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import {
  AuthTokenPayload,
  AuthTokenPayloadValidateInfo
} from './dto/auth-token-payload.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthRefreshToken } from './entityes/auth-refresh-token.entity';

/**
 *
 */
@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,

    @InjectRepository(AuthRefreshToken)
    private authRefreshTokenRepository: Repository<AuthRefreshToken>
  ) {}

  /**
   *
   * @param root0
   * @param root0.name
   * @param root0.lastName
   * @param root0.postalCode
   * @param root0.phone
   * @param root0.birthday
   * @param root0.email
   * @param root0.password
   */
  async register({
    name,
    lastName,
    postalCode,
    phone,
    birthday,
    email,
    password
  }: RegisterDto) {
    const userRegister = await this.userService.findOneByEmail(email);

    if (userRegister) {
      throw new BadRequestException('User already exists');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await this.userService.create({
      name,
      lastName,
      postalCode,
      phone,
      birthday,
      email,
      password: passwordHash
    });

    return {
      message: 'Use created successfully'
    };
  }

  /**
   *
   * @param user
   */
  async login(user: User): Promise<LoginDto> {
    const token = await this.generateTokenPair({
      id: user.id,
      email: user.email
    });
    return { user, ...token };
  }

  /**
   *
   * @param userInfo
   * @param currentRefreshToken
   * @param currentRefreshTokenExpiresAt
   */
  async generateTokenPair(
    userInfo: AuthTokenPayloadValidateInfo,
    currentRefreshToken?: string,
    currentRefreshTokenExpiresAt?: Date
  ): Promise<Omit<LoginDto, 'user'>> {
    const payload: AuthTokenPayload = {
      id: userInfo.id,
      email: userInfo.email
    };
    return {
      token: this.jwtService.sign(payload),
      refresh: await this.generateRefreshToken(
        userInfo,
        currentRefreshToken,
        currentRefreshTokenExpiresAt
      )
    };
  }

  /**
   *
   * @param token
   * @param userId
   */
  private isRefreshTokenBlackListed(token: string, userId: number) {
    return this.authRefreshTokenRepository.existsBy({ token, userId });
  }

  /**
   *
   * @param userInfo
   * @param currentRefreshToken
   * @param currentRefreshTokenExpiresAt
   */
  async generateRefreshToken(
    userInfo: AuthTokenPayloadValidateInfo,
    currentRefreshToken?: string,
    currentRefreshTokenExpiresAt?: Date
  ): Promise<string> {
    const refreshPayload: AuthTokenPayload = {
      id: userInfo.id,
      email: userInfo.email
    };
    const newRefreshToken = this.jwtService.sign(refreshPayload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: '30d'
    });

    if (currentRefreshToken && currentRefreshTokenExpiresAt) {
      if (
        await this.isRefreshTokenBlackListed(currentRefreshToken, userInfo.id)
      ) {
        throw new UnauthorizedException('Invalid refresh token.');
      }

      await this.authRefreshTokenRepository.insert({
        token: currentRefreshToken,
        expiration: currentRefreshTokenExpiresAt,
        userId: userInfo.id
      });
    }

    return newRefreshToken;
  }
}
