import {Component, inject, input} from '@angular/core';
import {HardwareService} from '../../../core/services/http/hardware-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-hardware',
  imports: [],
  templateUrl: './delete-hardware.html',
  styleUrl: './delete-hardware.scss'
})
export default class DeleteHardware {
  private service = inject(HardwareService);
  private router = inject(Router);
  readonly slug = input.required<string>();

  onDelete() {
    this.service.delete(this.slug()).subscribe();
    this.router.navigate(['/hardware']);
  }

}
