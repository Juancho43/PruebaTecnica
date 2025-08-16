import {inject, Injectable, signal} from '@angular/core';
import {CookieService} from './cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private cookieService = inject(CookieService);
  private isAuthenticated = signal( this.checkInitialAuthentication());

  getToken():string{
    return this.cookieService.getCookie('token') || '';
  }
  initializeSession(token :string) {
    this.cookieService.setCookie('token', token);
    this.isAuthenticated.set(true);
  }
  isAuthenticatedSignal() {

    return this.isAuthenticated.asReadonly();
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
  private checkInitialAuthentication(): boolean {
    const token = this.cookieService.getCookie('token');
    return !!token;
  }
}
