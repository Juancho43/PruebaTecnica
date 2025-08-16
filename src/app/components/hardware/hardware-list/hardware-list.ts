import {Component, input} from '@angular/core';
import {HardwareComponent} from '../hardware-component/hardware-component';
import {Hardware} from '../../../core/services/interfaces/Hardware';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hardware-list',
  imports: [
    HardwareComponent,
    RouterLink
  ],
  templateUrl: './hardware-list.html',
  styleUrl: './hardware-list.scss'
})
export class HardwareList {
  readonly data = input.required<Hardware[]>();
  readonly canEdit = input(false);
}
