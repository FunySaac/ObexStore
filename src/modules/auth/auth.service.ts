import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}



  async register({name, lastName, postalCode, phone, birthday, email, password}: RegisterDto) {
    const userRegister = await this.userService.findOneByEmail(email);

    if (userRegister) {
      throw new BadRequestException('User already exists');
    }

    const passwordHash = await bcrypt.hash(password, 10)

    await this.userService.create({
      name,
      lastName,
      postalCode,
      phone,
      birthday,
      email,
      password: passwordHash
    })

    return {
      message: "Use created successfully"
};  
}



  async login({email, password}: LoginDto) {
    const userLogin = await this.userService.findOneByEmail(email);

    if (!userLogin) {
      throw new UnauthorizedException('The email or password is incorrect');
    }

    const passwordVerify = await bcrypt.compare(password, userLogin.password);

    if (!passwordVerify) {
      throw new UnauthorizedException('The email or password is incorrect');
    }

    const payload = {email: userLogin.email}
    const token = await this.jwtService.signAsync(payload)

    console.log({
      token: token,
      email: userLogin.email
    });
    

    return {
      message: "User logged in successfully"
    };
  }

}
