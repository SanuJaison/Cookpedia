import { Component, inject, signal } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-download-list',
  standalone: false,
  templateUrl: './download-list.html',
  styleUrl: './download-list.css',
})
export class DownloadList {
  api = inject(Api);
  allDownloadList: any = signal([]);

  ngOnInit() {
    this.getDownloadList();
  }
  getDownloadList() {
    this.api.getAllDownloadListAPI().subscribe((res: any) => {
      this.allDownloadList.set(res);
      console.log(this.allDownloadList());
    });
  }
}
