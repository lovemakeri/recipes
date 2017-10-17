import { Component, OnInit } from '@angular/core';
import { ApiService, Cocktail } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  cocktails : Cocktail[];
  
  category: string;

  constructor( private apiService : ApiService, private router : Router) { }

  ngOnInit() {

    this.getCategory();
  }

  getCategory() {
    
        this.apiService.categorySubject.subscribe( (rec)=> { 
          this.category = rec;
    
           this.apiService.getCategory(rec).subscribe(recipes =>
            {
                this.cocktails = recipes.drinks;
                this.apiService.showCocktails(this.cocktails);
                this.apiService.doRequest(false);
            
            })
    
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
