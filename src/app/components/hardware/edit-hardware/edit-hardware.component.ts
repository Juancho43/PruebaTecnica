import {Component, inject, input} from '@angular/core';
import {HardwareForm} from '../hardware-form/hardware-form';
import {HardwareService} from '../../../core/services/http/hardware-service';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-edit-hardware',
  imports: [
    HardwareForm
  ],
  templateUrl: './edit-hardware.component.html',
  styleUrl: './edit-hardware.component.scss'
})
export default class EditHardware {
  private service = inject(HardwareService);
  readonly slug = input.required<string>();

  hardwareResource = rxResource(
    {
      params: ()=>{return{slug: this.slug()}},
      stream:({params}) => this.service.getBySlug(params.slug),
    }
  )
}
