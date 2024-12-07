import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<LoginResponseDto>,
  ): Observable<User> {
    return next.handle().pipe(
      map(({ user, token, refresh }) => {
        const response = context.switchToHttp().getResponse();
        if (token) {
          response.cookie('token', token, { httpOnly: true });
          response.cookie('refresh', refresh, { httpOnly: true });
        }
        return user;
      }),
    );
  }
}
