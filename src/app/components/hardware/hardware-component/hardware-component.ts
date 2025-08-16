import {Component, input} from '@angular/core';
import {Hardware} from '../../../core/services/interfaces/Hardware';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hardware-component',
  imports: [
    RouterLink
  ],
  templateUrl: './hardware-component.html',
  styleUrl: './hardware-component.scss'
})
export class HardwareComponent {
  readonly hardware = input.required<Hardware>();
  readonly canEdit = input(false);


}
