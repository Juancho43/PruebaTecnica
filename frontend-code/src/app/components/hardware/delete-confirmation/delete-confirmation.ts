import {Component, inject, input} from '@angular/core';
import {HardwareService} from '../../../core/services/http/hardware-service';
import {Router} from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-delete-confirmation',
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './delete-confirmation.html',
  styleUrl: './delete-confirmation.scss'
})
export class DeleteConfirmation {
  private ref = inject(MatDialogRef<DeleteConfirmation>);
  data : {slug : string} = inject(MAT_DIALOG_DATA);

  onDelete() {
    this.ref.close(true);

  }

  onCancel() {
    this.ref.close(false);
  }
}
