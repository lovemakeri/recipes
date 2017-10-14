import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  searchUrl : string = 'http://food2fork.com/api/search';
  recipeUrl : string = 'http://food2fork.com/api/get';
  key: string = 'f7955bf7202661b93a8e37608f995182';
  recipes : Recipe[];

  recipe : SingleRecipe;

  result : Result;

  constructor(private http : Http) {  }

  searchSubject = new Subject<string>();

  isRequesting = new Subject<Boolean>();

   makeSearch(query)
   {
   this.searchSubject.next(query);
   }

   doRequest(param)
   {
    this.isRequesting.next(param);
   }


   searchRequest(query) : Promise<Recipe[]>
   {
    let myUrl = this.searchUrl + '?key='+this.key+'&q='+query;

    return new Promise(resolve => {
this.http.get(myUrl).toPromise().then(resp=>{
  this.result = resp.json();
  this.recipes = this.result.recipes;
  resolve(this.recipes);

})
.catch(error => {
  
      console.log(error.status);
      console.log(error.error); 
      console.log(error.headers);
  
    });
    
    }); 
    
    }

    getRecipe(id) : Observable<RecipeDetails>
    {
     let myUrl = this.recipeUrl + '?key='+this.key+'&rId='+id;
 
     return this.http.get(myUrl)
     
      .map((res:Response) => res.json())
     
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     
     }
 

}

export interface Recipe
{
  publisher : string;
  f2f_url : string;
  title: string;
  source_url: string;
  recipe_id: string;
  image_url: string;
  social_rank: number;
  publisher_url: string;

}

export interface Result
{
  count : number;
  recipes : Recipe[];
}

export interface RecipeDetails
{
  recipe : SingleRecipe;
}

export interface SingleRecipe
{
  publisher : string;
  f2f_url : string;
  ingredients: string[];
  source_url: string;
  recipe_id: string;
  image_url: string;
  social_rank: number;
  publisher_url: string;
  title: string;
}