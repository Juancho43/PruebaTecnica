import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {authEndpoints} from '../endpoints/auth.endpoints';
import {LoginDTO} from '../DTO/LoginDTO';
import {RegisterDTO} from '../DTO/RegisterDTO';

import {ApiResponse} from '../DTO/ApiResponse';
import {tap} from 'rxjs';
import {SessionService} from '../util/session-service';
import {checkToken} from '../util/token.interceptor';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private http = inject(HttpClient);
 private snackBar = inject(MatSnackBar);
  private session = inject(SessionService);
  login(data: LoginDTO) {
    const url = environment.apiUrl + authEndpoints.login;
    return this.http.post<ApiResponse<string>>(url, data).pipe(
     tap(response => {
       this.snackBar.open(response.message, 'Close')
       this.session.initializeSession(response.data)
     })
    );
  }

  register(data : RegisterDTO) {
    const url = environment.apiUrl + authEndpoints.register;
    return this.http.post<ApiResponse<string>>(url, data).pipe(
      tap((response)=>
        this.snackBar.open(response.message, 'Close'))
    );
  }

  logout(){
    const url = environment.apiUrl + authEndpoints.logout;
    return this.http.post<ApiResponse<any>>(url, {},{context:checkToken()}).pipe(
      tap(response => {
        this.session.finalizeSession();
        this.snackBar.open(response.message, 'Close')
      })
    );
  }


}
