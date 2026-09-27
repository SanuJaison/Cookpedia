import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../../services/api';
import { Router } from '@angular/router';
import { SearchPipe } from '../../pipe/search-pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  imports: [Header, Footer, SearchPipe, FormsModule, NgxPaginationModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
  api = inject(Api);
  allRecipes: any = signal([]);
  dummyAllRecipes: any[] = [];
  cusineArray: any = signal([]);
  mealtypeArray: any = signal([]);
  router = inject(Router)
  searchKey:string = ""
  p: number = 1;

  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.api.getAllRecipesAPI().subscribe({
      next: (res: any) => {
        this.allRecipes.set(res);
        // console.log(res);
        console.log(this.allRecipes());
        this.dummyAllRecipes = res;

        const dummyCusineArray = res.map((item: any) => item.cuisine);

        dummyCusineArray.forEach((item: any) => {
          !this.cusineArray().includes(item) && this.cusineArray().push(item);
        });

        const dummyMealArray = res.map((item: any) => item.mealType).flat(1);
        dummyMealArray.forEach((item: any) => {
          !this.mealtypeArray().includes(item) && this.mealtypeArray().push(item);
        });

        console.log({ cusine: this.cusineArray() });
        console.log({ MealType: this.mealtypeArray() });
      },
      error: (reason: any) => {
        console.log(reason);
      },
    });
  }

  //filter
  filterRecipes(key: string, value: string) {
    this.allRecipes.set(this.dummyAllRecipes.filter((item: any) => item[key] == value));
  }

  filterMealType(key: string, value: string) {
    this.allRecipes.set(this.dummyAllRecipes.filter((item: any) => item[key].includes(value)));
  }

  viewRecipe(recipeId: string) {
    if (sessionStorage.getItem('token')) {
      this.router.navigateByUrl(`recipe/${recipeId}`);
    } else {
      alert('Please Login to acces our recipe collection');
      this.router.navigateByUrl('/login');
    }
  }
}
