import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../../services/api';
import { AdminModuleRoutingModule } from "../../admin-module/admin-module-routing-module";

@Component({
  selector: 'app-collections',
  imports: [Header, Footer, AdminModuleRoutingModule],
  templateUrl: './collections.html',
  styleUrl: './collections.css',
})
export class Collections {
  api = inject(Api);
  recipeCollection: any = signal([]);

  ngOnInit(){
    this.getUserCollection()
  }

  getUserCollection() {
    this.api.getSavedRecipesAPI().subscribe((res: any) => {
      this.recipeCollection.set(res);
      console.log(this.recipeCollection());
    });
  }

  removeCollection(id:string){
    this.api.removeRecipeAPI(id).subscribe((res:any)=>{
      alert(`${name}, has been removed from the collection`)
    })
  }
}
