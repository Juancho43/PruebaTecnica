import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {authEndpoints} from '../endpoints/auth.endpoints';
import {LoginDTO} from '../DTO/LoginDTO';
import {RegisterDTO} from '../DTO/RegisterDTO';
import {Token} from '../interfaces/Token';
import {ApiResponse} from '../DTO/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private http = inject(HttpClient);

  login(data: LoginDTO) {
    const url = environment.apiUrl + authEndpoints.login;
    return this.http.post<ApiResponse<Token>>(url, data);
  }

  register(data : RegisterDTO) {
    const url = environment.apiUrl + authEndpoints.register;
    return this.http.post<ApiResponse<string>>(url, data);
  }

  logout(){
    const url = environment.apiUrl + authEndpoints.logout;
    return this.http.post<ApiResponse<any>>(url, {});
  }


}
