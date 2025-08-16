import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
 setCookie(name: string, value: string, days: number = 7) {
   Cookies.set(name, value, { expires: days });
 }
 getCookie(name: string): string | undefined {
    const cookieValue = Cookies.get(name);
    return cookieValue ? cookieValue : undefined;
 }
  removeCookie(name: string) {
    Cookies.remove(name);
  }
}
