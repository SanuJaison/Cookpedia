import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from '../models/recipeModel';
import { Api } from '../../services/api';

@Component({
  selector: 'app-manage-recipe',
  standalone: false,
  templateUrl: './manage-recipe.html',
  styleUrl: './manage-recipe.css',
})
export class ManageRecipe {
  route = inject(ActivatedRoute);
  api = inject(Api)
  recipeID = this.route.snapshot.params;
  recipeDetails = signal(<RecipeModel>{});

  ingredientsArray: any = [];
  instructionsArray: any = [];
  mealTypeArray: any = [];

  addIngredient(ingredientInput: HTMLTextAreaElement) {
    if (ingredientInput.value) {
      this.ingredientsArray.push(ingredientInput.value);
      ingredientInput.value = '';
    }
  }

  addInstruction(instructionsInput: HTMLTextAreaElement) {
    if (instructionsInput.value) {
      this.instructionsArray.push(instructionsInput.value);
      instructionsInput.value = '';
    }
  }

  addMealType(mealTypeInput: HTMLTextAreaElement) {
    if (mealTypeInput.value) {
      this.mealTypeArray.push(mealTypeInput.value);
      mealTypeInput.value = '';
    }
  }

  removeIngredient(value: string) {
    this.ingredientsArray = this.ingredientsArray.filter((item: string) => item != value);
  }

  removeInstruction(value: string) {
    this.ingredientsArray = this.ingredientsArray.filter((item: string) => item != value);
  }

  removeMealTypet(value: string) {
    this.ingredientsArray = this.ingredientsArray.filter((item: string) => item != value);
  }

  addRecipe(){
    this.recipeDetails().ingredients = this.ingredientsArray
    this.recipeDetails().instructions = this.instructionsArray
    this.recipeDetails().mealType = this.mealTypeArray

    const {name, ingredients, instructions} = this.recipeDetails()
    if(name && ingredients && instructions  ) {
      this.api.addRecipeAPI((this.recipeDetails())).subscribe({
        next:(res: any)=>{
          alert("Recipe Added successfully")
          this.recipeDetails.set({}
          )
               this.ingredientsArray = []
                    this.ingredientsArray = []
        }
      })

    }
  }
}
