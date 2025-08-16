import {CanActivateFn, Router} from '@angular/router';
import {SessionService} from './session-service';
import {inject} from '@angular/core';

export const unauthenticatedGuard : CanActivateFn = () => {
  const auth = inject(SessionService);
  const router = inject(Router);

  if (!auth.checkAuthentication()) {
    return true;
  } else {
    return router.createUrlTree(['/']);
  }
};
