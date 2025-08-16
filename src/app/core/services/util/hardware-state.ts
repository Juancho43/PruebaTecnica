import {Injectable, signal} from '@angular/core';
import {HardwareAction} from '../interfaces/HardwareAction';

@Injectable({
  providedIn: 'root'
})
export class HardwareState {
  private action = signal<HardwareAction | null>(null)

  notifyAction(action: HardwareAction) {
    this.action.set(action);
  }

  clearAction() {
    this.action.set(null);
  }

  getAction() {
    return this.action.asReadonly();
  }
}
