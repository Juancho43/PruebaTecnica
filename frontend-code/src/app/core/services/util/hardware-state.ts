import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardwareState {
  private action = signal<string>('')

  notifyAction(action:string) {
    this.action.set(action);
  }

  clearAction() {
    this.action.set('');
  }

  getAction() {
    return this.action.asReadonly();
  }
}
