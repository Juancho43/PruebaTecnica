import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HardwareList} from '../hardware-list/hardware-list';

@Component({
  selector: 'app-page-hardware',
  imports: [
    RouterOutlet,
    HardwareList
  ],
  templateUrl: './page-hardware.html',
  styleUrl: './page-hardware.scss'
})
export default class PageHardware {

}
