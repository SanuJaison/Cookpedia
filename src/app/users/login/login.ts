import { Component, inject } from '@angular/core';
import { AdminModuleRoutingModule } from '../../admin-module/admin-module-routing-module';
import { Api } from '../../services/api';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [AdminModuleRoutingModule, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  api = inject(Api);

  loginForm: FormGroup;
  fb = inject(FormBuilder);
  router = inject(Router);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(`[a-zA-Z0-9]*`)]],
    });
  }

  handleLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.api.loginAPI({ email, password }).subscribe({
        next: (res: any) => {
          console.log(res);
          const username = res.user.username;
          alert(`Hi ${username}, Welcome to CookPedia`);

          sessionStorage.setItem('user', JSON.stringify(res.user));
          sessionStorage.setItem('token', res.token);
          
          if (res.user.role == 'admin') {
            this.router.navigateByUrl('/admin');
          } else {
            this.router.navigateByUrl('/');
          }
        },
        error: (reason: any) => {
          console.log(reason);
          alert(reason.error);
        },
      });
      this.loginForm.reset();
    }
  }
}
