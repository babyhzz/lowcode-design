import { ResponseStatus, Result } from '@/shared/types';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Result<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Result<T>> {
    return next.handle().pipe(
      map((data) => ({
        status: ResponseStatus.SUCCESS,
        msg: '',
        data,
      })),
    );
  }
}
