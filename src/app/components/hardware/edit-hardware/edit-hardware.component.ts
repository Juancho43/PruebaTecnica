import { Component } from '@angular/core';
import {HardwareForm} from '../hardware-form/hardware-form';

@Component({
  selector: 'app-edit-hardware',
  imports: [
    HardwareForm
  ],
  templateUrl: './edit-hardware.component.html',
  styleUrl: './edit-hardware.component.scss'
})
export default class EditHardware {

}
