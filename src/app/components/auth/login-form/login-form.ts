import {Component, inject} from '@angular/core';
import {AuthService} from '../../../core/services/http/auth-service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginDTO} from '../../../core/services/DTO/LoginDTO';

@Component({
  selector: 'app-login-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export default class LoginForm {
  private authService = inject(AuthService);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
  });

  toLoginDto() : LoginDTO {
    return{
      email: this.loginForm.value?.email!,
      password: this.loginForm.value?.password!
    }
  }
  onSubmit(){
    this.authService.login(this.toLoginDto()).subscribe();
  }
}
