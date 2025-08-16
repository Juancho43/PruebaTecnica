import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {hardwareEndpoints} from '../endpoints/hardware.endpoints';
import {ApiResponse} from '../DTO/ApiResponse';
import {Hardware} from '../interfaces/Hardware';
import {tap} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HardwareState} from '../util/hardware-state';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);
  private state = inject(HardwareState);
  getAll(){
    const url = environment.apiUrl + hardwareEndpoints.getAll;
    return this.http.get<ApiResponse<Hardware[]>>(url);
  }

  getBySlug(slug: string){
    const url = environment.apiUrl + hardwareEndpoints.getBySlug(slug);
    return this.http.get<ApiResponse<Hardware>>(url);
  }

  create(data: Hardware) {
    const url = environment.apiUrl + hardwareEndpoints.create;
    return this.http.post<ApiResponse<Hardware>>(url, data).pipe(
      tap(response => {
        this.snackBar.open(response.message, 'Close');
        this.state.notifyAction('create');
      })
    );
  }
  update(slug: string, data: Hardware) {
    const url = environment.apiUrl + hardwareEndpoints.update(slug);
    return this.http.put<ApiResponse<Hardware>>(url, data).pipe(
      tap(response => {
        this.snackBar.open(response.message, 'Close')
        this.state.notifyAction('update');
      })
    );
  }
  delete(slug: string) {
    const url = environment.apiUrl + hardwareEndpoints.delete(slug);
    return this.http.delete<ApiResponse<any>>(url).pipe(
      tap(response => {
       this.snackBar.open('Elimanado correctamente', 'Close');
        this.state.notifyAction('delete');
      })
    );
  }

}
