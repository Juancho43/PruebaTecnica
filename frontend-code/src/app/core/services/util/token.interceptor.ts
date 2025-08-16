import {HttpContext, HttpContextToken, HttpInterceptorFn} from '@angular/common/http';
import {SessionService} from './session-service';
import {inject} from '@angular/core';

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true);
}

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(CHECK_TOKEN)) {
    const sessionService = inject(SessionService);
    const accessToken = sessionService.getToken();
    if (accessToken) {
      const authRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
      });
      return next(authRequest);
    }
    return next(req);
  }
  return next(req);
};
