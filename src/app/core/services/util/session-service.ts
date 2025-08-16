import {inject, Injectable, signal} from '@angular/core';
import {CookieService} from './cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private cookieService = inject(CookieService);
  private isAuthenticated = signal( false);

  getToken():string{
    return this.cookieService.getCookie('token') || '';
  }
  initializeSession(token :string) {
    this.cookieService.setCookie('token', token);
    this.isAuthenticated.set(true);
  }
  isAuthenticatedSignal() {

    return this.isAuthenticated;
  }
  checkAuthentication() {
    const token = this.cookieService.getCookie('token');
    if (token) {
      this.isAuthenticated.set(true);
    } else {
      this.isAuthenticated.set(false);
    }
    return this.isAuthenticated();
  }
  finalizeSession() {
    this.cookieService.removeCookie('token');
    this.isAuthenticated.set(false);
  }
}
