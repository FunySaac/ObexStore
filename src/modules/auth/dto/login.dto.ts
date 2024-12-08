import { IsString } from 'class-validator';
import { User } from 'src/modules/user/entities/user.entity';

/**
 *
 */
export class LoginDto {
  user: User;

  @IsString()
  token: string;

  @IsString()
  refresh: string;
}
