import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '@envs/environment';

@Injectable({ providedIn: 'root' })
export class HeaderCompleterInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      url: `${request.url}?key=${environment.key}`,
      setHeaders: environment.headerRapidapi
    });
    return next.handle(modifiedRequest);
  }
}
