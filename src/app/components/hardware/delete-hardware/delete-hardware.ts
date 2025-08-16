import {Component, effect, inject, input, OnInit} from '@angular/core';
import {HardwareService} from '../../../core/services/http/hardware-service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DeleteConfirmation} from '../delete-confirmation/delete-confirmation';

@Component({
  selector: 'app-delete-hardware',
  imports: [],
  templateUrl: './delete-hardware.html',
  styleUrl: './delete-hardware.scss'
})
export default class DeleteHardware{
  readonly slug = input.required<string>();
  private dialog = inject(MatDialog);
  private service = inject(HardwareService);
  private router = inject(Router);
  constructor() {
    effect(() => {
      const slug = this.slug();

      if (slug) {
      const ref = this.dialog.open(DeleteConfirmation, { data: { slug },closeOnNavigation: true });
      ref.afterClosed().subscribe(result => {
        if (result) {
          this.service.delete(slug).subscribe();
        }
        this.router.navigate(['/hardware']);
      })
      }
    });
  }

}
