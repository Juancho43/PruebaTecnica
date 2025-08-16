import { Component } from '@angular/core';
import {HardwareComponent} from '../hardware-component/hardware-component';

@Component({
  selector: 'app-hardware-list',
  imports: [
    HardwareComponent
  ],
  templateUrl: './hardware-list.html',
  styleUrl: './hardware-list.scss'
})
export class HardwareList {

}
