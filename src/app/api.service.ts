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

  cocktailUrl : string = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  ingredientUrl : string = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
  cocktailRecipeUrl : string = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


  cocktails : CocktailRecipe[];

  resultCocktail : CocktailRecipes;

  constructor(private http : Http) {  }

  
  isRequesting = new Subject<Boolean>();

  cocktailSubject = new Subject<CocktailRecipe>();

  categorySubject = new Subject<string>();

  cocktailsSubject = new Subject<Cocktail[]>();


  doRequest(param)
   {
    this.isRequesting.next(param);
   }

  showCocktails(cocktails)
    {
      this.cocktailsSubject.next(cocktails);
    }

   showCocktail(cocktail)
   {
   this.cocktailSubject.next(cocktail);
   }

   showCategory(cat)
   {
     this.categorySubject.next(cat);
   }

   getCategories()  : Observable<Drinks>
   {
    let myUrl = "http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    
        return this.http.get(myUrl)
        
         .map((res:Response) => res.json())
        
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }

   getCategory(cat) : Observable<Cocktails>
   {
    let myUrl = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+cat;
    
        return this.http.get(myUrl)
        
         .map((res:Response) => res.json())
        
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }


   cocktailRequest(query, qUrl) : Observable<Cocktail[]>
   {
    let myUrl = qUrl +query;

    return this.http.get(myUrl)
    
     .map((res:Response) => {
       res.json();
       this.resultCocktail = res.json();
       this.cocktails = this.resultCocktail.drinks;
       return this.cocktails;    
    })
    
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }


  
    getCocktailRecipe(id) : Observable<CocktailRecipes>
    {
     let myUrl = this.cocktailRecipeUrl + id;
 
     return this.http.get(myUrl)
     
      .map((res:Response) => res.json())
     
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
 }

 export interface Drinks
 {
drinks : Category[];

 }

export interface Category
{
  strCategory: string;
}




export interface Cocktails
{
  drinks: Cocktail[];
}

export interface Cocktail
{
  strDrink : string;
  strDrinkThumb : string;
  idDrink : string;
}

export interface CocktailRecipes
{
  drinks: CocktailRecipe[];
}

export interface CocktailRecipe
{
  idDrink : string;
  strDrink : string;
  strVideo : any;
  strCategory : string;
  strIBA : string;
  strAlcoholic : string;
  strGlass : string;
  strInstructions : number;
  strDrinkThumb : string;
  strIngredient1 : string;
  strIngredient2 : string;
  strIngredient3 : string;
  strIngredient4 : string;
  strIngredient5 : string;
  strIngredient6 : string;
  strIngredient7 : string;
  strIngredient8 : string; 
  strIngredient9 : string;
  strIngredient10 : string;
  strIngredient11 : string;
  strIngredient12 : string;
  strIngredient13 : string;
  strIngredient14 : string;
  strIngredient15 : string;
  strMeasure1 : string;
  strMeasure2 : string;
  strMeasure3 : string;
  strMeasure4 : string;
  strMeasure5 : string;
  strMeasure6 : string;
  strMeasure7 : string;
  strMeasure8 : string; 
  strMeasure9 : string;
  strMeasure10 : string;
  strMeasure11 : string;
  strMeasure12 : string;
  strMeasure13 : string;
  strMeasure14 : string;
  strMeasure15 : string;
  dateModified: string;
}