import {Component, effect, inject, input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Hardware} from '../../../core/services/interfaces/Hardware';
import {HardwareService} from '../../../core/services/http/hardware-service';

@Component({
  selector: 'app-hardware-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './hardware-form.html',
  styleUrl: './hardware-form.scss'
})
export class HardwareForm {
  private service = inject(HardwareService);
  readonly  edit = input(false);
  readonly  hardwareToEdit = input<Hardware>();
  hardwareForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    model: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
    manufacturer: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
  })

  constructor() {
    effect(() => {
      if (this.edit()) this.toForm();
    });
  }
  onSubmit(){
    if(!this.edit()){
      this.service.create(this.toHardware()).subscribe();
    }else{
      this.service.update(this.hardwareToEdit()!.slug!, this.toHardware()).subscribe();
    }
  }

  toForm(){
    this.hardwareForm.patchValue({
      name: this.hardwareToEdit()!.name ?? '',
      model: this.hardwareToEdit()!.model ?? '',
      manufacturer: this.hardwareToEdit()!.manufacturer ?? '',
    })
  }
  toHardware() : Hardware{
    return {
      id: this.hardwareToEdit()?.id,
      name: this.hardwareForm.value.name ?? '',
      model: this.hardwareForm.value.model ?? '',
      manufacturer: this.hardwareForm.value.manufacturer ?? '',
    }
  }
}
