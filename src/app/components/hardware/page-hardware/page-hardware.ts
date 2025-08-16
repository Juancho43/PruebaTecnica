import {Component, computed, inject, linkedSignal, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HardwareList} from '../hardware-list/hardware-list';
import {rxResource} from '@angular/core/rxjs-interop';
import {HardwareService} from '../../../core/services/http/hardware-service';
import {SessionService} from '../../../core/services/util/session-service';
import {HardwareState} from '../../../core/services/util/hardware-state';



@Component({
  selector: 'app-page-hardware',
  imports: [
    RouterOutlet,
    HardwareList
  ],
  templateUrl: './page-hardware.html',
  styleUrl: './page-hardware.scss'
})
export default class PageHardware{
  private service = inject(HardwareService);
  private session = inject(SessionService);
  private state = inject(HardwareState);
  hardwareState = computed(()=>this.state.getAction()())
  showFlash = linkedSignal(()=> !!this.hardwareState );
  isLoggedIn = linkedSignal(this.session.isAuthenticatedSignal());
  hardwareListResource = rxResource({
    params: () => {return this.hardwareState()},
    stream: () => this.service.getAll(),
  })



  onCloseFlash()
  {
    this.showFlash.set(false);
  }

}
