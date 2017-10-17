import { Component, OnInit } from '@angular/core';
import { ApiService, Cocktail } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recipes',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipesComponent implements OnInit {
  cocktails : Cocktail[];
  category: string;

  constructor( private apiService : ApiService, private router: Router ) { }

  ngOnInit() {
    this.apiService.cocktailsSubject.subscribe( recipes =>
      {
        this.cocktails = recipes;
      });
  }


openCocktail(id)
{  
  this.cocktails = null;
  this.category = null;
  this.apiService.doRequest(true);
  this.router.navigate(['/cocktail', id]);
  
}

}