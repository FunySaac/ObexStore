import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService) {}

  async register(registerDto: RegisterDto) {
    const userRegister = await this.userService.create(registerDto);
    return userRegister;
  }

  async login(loginDto: LoginDto) {
    const userLogin = await this.userService.create(loginDto);
    return userLogin;
  }

}
