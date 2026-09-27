import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { AdminModuleRoutingModule } from '../../admin-module/admin-module-routing-module';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../services/api';
import { AsyncPipe } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-view-recipe',
  imports: [Header, Footer, AdminModuleRoutingModule, AsyncPipe],
  templateUrl: './view-recipe.html',
  styleUrl: './view-recipe.css',
})
export class ViewRecipe {
  route = inject(ActivatedRoute);
  recipeID = this.route.snapshot.params['id'];
  api = inject(Api);
  recipe$ = this.api.viewRecipeAPI(this.recipeID);
  allRelatedRecipes: any = signal([]);
  router = inject(Router);

  ngOnInit() {
    this.recipe$.subscribe((res: any) => {
      this.getTheRelatedRecipe(this.recipeID, res.cuisine);
    });
  }

  getTheRelatedRecipe(id: string, cuisine: string) {
    this.api.relatedRecipes(id, cuisine).subscribe((res: any) => {
      console.log(res);
      this.allRelatedRecipes.set(res);
      console.log(this.allRelatedRecipes());
    });
  }

  saveRecipe() {
    this.recipe$.subscribe((res: any) => {
      this.addToCollection(this.recipeID, res.name, res.image);
    });
  }

  //add to user collection
  addToCollection(id: string, name: string, image: string) {
    this.api.addToSaveAPI(id, { name, image }).subscribe({
      next: (res: any) => {
        alert(`${res.name} has added to your collection`);
      },
      error: (reason: any) => {
        alert(reason.error);
      },
    });
  }

  viewRecipeFromRelatedRecipe(id: string, cuisine: string) {
    this.recipe$ = this.api.viewRecipeAPI(id);
    this.getTheRelatedRecipe(id, cuisine);
    this.router.navigateByUrl(`/recipe/${id}`);
  }

  downloadRecipe() {
    this.recipe$.subscribe((res: any) => {
      this.addToDownloadList(this.recipeID, res);
    });
  }

  //download recipe
  addToDownloadList(id: string, recipe: any) {
    this.api.downloadRecipeAPI(id, recipe).subscribe((res: any) => {
      console.log(res);
      this.generatePDF(recipe);
    });
  }

  generatePDF(recipe: any) {
    let pdf = new jsPDF();

    let titleRow = [['Name', 'Cuisine', 'Ingredients', 'Instructions']];
    let bodyRow = [[recipe.name, recipe.cuisine, recipe.ingredients, recipe.instructions]];

    autoTable(pdf, { head: titleRow, body: bodyRow });
    pdf.save(`${recipe.name}.pdf`);
  }
}
