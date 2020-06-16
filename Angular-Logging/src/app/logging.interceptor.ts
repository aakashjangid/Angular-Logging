import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private logger: NGXLogger) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.logger.debug(request.urlWithParams);

    return next.handle(request);
  }
}
