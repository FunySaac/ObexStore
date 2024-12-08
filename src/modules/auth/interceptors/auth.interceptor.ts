import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { User } from 'src/modules/user/entities/user.entity';
import { LoginDto } from '../dto/login.dto';

/**
 *
 */
@Injectable()
export class AuthInterceptor implements NestInterceptor {
  /**
   *
   * @param context
   * @param next
   */
  intercept(
    context: ExecutionContext,
    next: CallHandler<LoginDto>
  ): Observable<User> {
    return next.handle().pipe(
      map(({ user, token, refresh }) => {
        const response = context.switchToHttp().getResponse();
        if (token) {
          response.cookie('token', token, { httpOnly: true });
          response.cookie('refresh', refresh, { httpOnly: true });
        }
        return user;
      })
    );
  }
}
