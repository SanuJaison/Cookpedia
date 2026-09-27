import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../../services/api';
import { AsyncPipe } from '@angular/common';
import { AdminModuleRoutingModule } from '../../admin-module/admin-module-routing-module';

@Component({
  selector: 'app-profile',
  imports: [Header, Footer, AsyncPipe, AdminModuleRoutingModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  username: string = '';
  userID: string = '';
  imageURL: any = signal(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  );

  api = inject(Api);
  userDownloadList$ = this.api.getUserDownloadListAPI();

  ngOnInit() {
    if (sessionStorage.getItem('user')) {
      const user = JSON.parse(sessionStorage.getItem('user') || '');
      this.username = user.username;
      this.userID = user._id;
      user.picture && this.imageURL.set(`${this.api.serverUrl}/uploads/${user.picture}`);
    }
  }

  handleUploadProfile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const uploadFile = input.files[0];
      const reqBody = new FormData();
      reqBody.append('picture', uploadFile);

      this.api.updateUserProfileAPI(this.userID, reqBody).subscribe((res: any) => {
        alert('User profile updated successfully');
        sessionStorage.setItem('user', JSON.stringify(res));
        this.imageURL.set(`${this.api.serverUrl}/uploads/${res.picture}`);
      });
    }
  }
}
