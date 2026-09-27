import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { AdminModuleRoutingModule } from '../../admin-module/admin-module-routing-module';
import { Footer } from '../footer/footer';
import { Api } from '../../services/api';
import { AsyncPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Header, AdminModuleRoutingModule, Footer, AsyncPipe, SlicePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  api = inject(Api);
  approvedTestimonials:any = signal([])

  allRecipes$ = this.api.getAllRecipesAPI();

  ngOnInit(){
    this.getAllApprovedTestimonials()
  }

  getAllApprovedTestimonials(){
    this.api.getAllApprovedTestimonialsAPI().subscribe((res:any)=>{
      this.approvedTestimonials.set(res)
      console.log(this.approvedTestimonials());
      
    })
  }
}
