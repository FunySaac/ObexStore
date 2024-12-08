import {
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';

/**
 *
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   *
   * @param registerDto
   */
  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto
  ) {
    return this.authService.register(registerDto);
  }

  /**
   *
   * @param req
   */
  @Post('refresh-token')
  @UseGuards(JwtRefreshGuard)
  @UseInterceptors(AuthInterceptor)
  refreshTokens(@Req() req: Request): Promise<Omit<LoginDto, 'user'>> {
    if (!req.user) {
      throw new UnauthorizedException();
    }
    return this.authService.generateTokenPair(
      req.user['info'],
      req.cookies['refresh'],
      req.user['expiration']
    );
  }
}
