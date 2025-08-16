import {Component, inject} from '@angular/core';
import {AuthService} from '../../../core/services/http/auth-service';

@Component({
  selector: 'app-logout-button',
  imports: [],
  templateUrl: './logout-button.html',
  styleUrl: './logout-button.scss'
})
export class LogoutButton {
  private authService = inject(AuthService);
  onClickHandle(){
    this.authService.logout().subscribe();
  }

}
