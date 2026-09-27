import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeModel } from '../admin-module/models/recipeModel';

@Injectable({
  providedIn: 'root',
})
export class Api {
  http = inject(HttpClient);

  // serverUrl: string = 'http://localhost:3000';

  serverUrl: string = 'https://cookpedis-backend-1.onrender.com';

  //api for reg a user
  registerAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/register`, reqBody);
  }

  //login
  loginAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/login`, reqBody);
  }

  //add testimony
  addTestimonyAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/add-testimony`, reqBody);
  }

  //get all recipes
  getAllRecipesAPI(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverUrl}/recipes`);
  }

  //view recipe api
  viewRecipeAPI(id: string): Observable<any> {
    return this.http.get<any>(`${this.serverUrl}/view/${id}/recipe`);
  }

  //related recipes
  relatedRecipes(recipeId: string, cuisine: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverUrl}/related-recipe/${recipeId}?cuisine=${cuisine}`);
  }

  //add to collection
  addToSaveAPI(recipeID: any, reqBody: any) {
    return this.http.post(`${this.serverUrl}/save-recipe/${recipeID}`, reqBody);
  }

  //get user collection
  getSavedRecipesAPI() {
    return this.http.get(`${this.serverUrl}/saved-recipes`);
  }

  //delete user collection
  removeRecipeAPI(id: string) {
    return this.http.delete(`${this.serverUrl}/remove-recipe/${id}`);
  }

  //add download
  downloadRecipeAPI(id: string, reqBody: any) {
    return this.http.post(`${this.serverUrl}/downloads/${id}`, reqBody);
  }

  //get user downloads
  getUserDownloadListAPI(): Observable<any> {
    return this.http.get<any>(`${this.serverUrl}/user-downloads`);
  }

  //update user profile
  updateUserProfileAPI(id: string, reqBody: any) {
    return this.http.put(`${this.serverUrl}/profile/${id}`, reqBody);
  }

  //get all donwloads
  getAllDownloadListAPI() {
    return this.http.get(`${this.serverUrl}/admin/downloads`);
  }

  //get all approved testimonials
  getAllApprovedTestimonialsAPI() {
    return this.http.get(`${this.serverUrl}/approved-testimonials`);
  }

  //add recipe
  addRecipeAPI(reqBody: RecipeModel){
     return this.http.post(`${this.serverUrl}/admin/add-recipe`, reqBody);
  }
}
