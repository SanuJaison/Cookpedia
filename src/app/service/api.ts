// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';



// @Injectable({
//   providedIn: 'root',
// })
// export class Api {
  
//   http = inject(HttpClient)
//   serverUrl:string = "http://localhost:3000"
//   token = sessionStorage.getItem('token')

//   // api for regsiter
//   registerAPI(reqBody:any){
//     return this.http.post(`${this.serverUrl}/register`,reqBody)
//   }

//   loginAPI(reqBody:any){
//     return this.http.post(`${this.serverUrl}/login`,reqBody)
//   }

//   addTestimonialsAPI(reqBody:any){
//     return this.http.post(`${this.serverUrl}/add/testimonials`,reqBody)
//   }

//   getAllRecipesAPI():Observable<any[]>{
//     return this.http.get<any[]>(`${this.serverUrl}/all-recipes`)
//   }

//   viewRecipesAPI(id:string):Observable<any>{
//     return this.http.get<any>(`${this.serverUrl}/viewRecipe/${id}`)
//   }

//   viewRelatedRecipesAPI(id:string,cuisine:string):Observable<any[]> {
//     return this.http.get<any[]>(`${this.serverUrl}/related/recipes/${id}?cuisine=${cuisine}`)
//   }

//   // saveRecipeAPI(recipeID:string, image: string, name:string){
//   //   return this.http.post(`${this.serverUrl}/saveRecipe/:${recipeID}`,{
//   //     name, image
//   //   }, {headers: {authorization : `Bearer ${this.token}`}  })
//   // }

//   // getSavedRecipesAPI():Observable<any[]>{
//   //   return this.http.get<any[]>(`${this.serverUrl}/getSavedRecipes`,{headers: {authorization : `Bearer ${this.token}`}})
//   // }

//   saveRecipeAPI(recipeID:string, image: string, name:string){
//     return this.http.post(`${this.serverUrl}/saveRecipe/:${recipeID}`,{
//       name, image
//     })
//   }


//   getSavedRecipesAPI():Observable<any[]>{
//     return this.http.get<any[]>(`${this.serverUrl}/getSavedRecipes`,{})
//   }

//   deleteSavedRecipeAPI(itemID:string){
//     return this.http.delete(`${this.serverUrl}/deleteSavedRecipe/${itemID}`,{})
//   }

//   addDownloadDataAPI = (recipeID:string, data:any){

//   }

// }
