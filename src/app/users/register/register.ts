import { Component, inject } from '@angular/core';
import { AdminModuleRoutingModule } from '../../admin-module/admin-module-routing-module';
import { Api } from '../../services/api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [AdminModuleRoutingModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  api = inject(Api);

  registerForm: FormGroup;
  fb = inject(FormBuilder);
  router = inject(Router);

  constructor() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(`[a-zA-Z]*`)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(`[a-zA-Z0-9]*`)]],
    });
  }

  handleRegister() {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username;
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;

      console.log(username, email, password);

      this.api.registerAPI({ username, email, password }).subscribe({
        next: (res: any) => {
          console.log(res);
          alert('Registered Successfully');
          this.router.navigateByUrl('/login');
        },
        error: (reason: any) => {
          console.log(reason);
        },
      });

      this.registerForm.reset();
    }
  }
}
