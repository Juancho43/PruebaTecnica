import {Component, effect, inject, linkedSignal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {LogoutButton} from '../../auth/logout-button/logout-button';
import {SessionService} from '../../../core/services/util/session-service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    LogoutButton
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private session = inject(SessionService);
  isLoggedIn = linkedSignal(this.session.isAuthenticatedSignal());



}
