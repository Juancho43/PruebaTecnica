import {Component, inject} from '@angular/core';
import {AuthService} from '../../../core/services/http/auth-service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RegisterDTO} from '../../../core/services/DTO/RegisterDTO';

@Component({
  selector: 'app-register-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss'
})
export default class RegisterForm {
  private authService = inject(AuthService);

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
  });

  toRegisterDto() : RegisterDTO {
    return{
      email: this.registerForm.value?.email!,
      password: this.registerForm.value?.password!
    }
  }
  onSubmit(){
    this.authService.register(this.toRegisterDto()).subscribe();
  }
}
