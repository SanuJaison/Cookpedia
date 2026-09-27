import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormsModule, NgForm } from '@angular/forms';
import { Api } from '../../services/api';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  api = inject(Api);

  name: string = '';
  email: string = '';
  message: string = '';

  addTestimony(form: NgForm) {
    if (form.valid) {
      this.api
        .addTestimonyAPI({ name: this.name, email: this.email, message: this.message })
        .subscribe({
          next: (res: any) => {
            alert('Thank you for the feedback');
          },
          error: (reason: any) => {
            console.log(reason);
          },
        });
    } else {
      alert('Fill all the fields');
    }
    form.resetForm();
  }
}
