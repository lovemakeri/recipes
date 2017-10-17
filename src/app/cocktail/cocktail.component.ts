import { Component, OnInit } from '@angular/core';
import {ApiService, CocktailRecipe } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
    
    cocktail: CocktailRecipe;
    id : number;


    constructor( private apiService :ApiService, private route : ActivatedRoute, private router: Router ) { }
  
    ngOnInit() {

      this.route.params.subscribe( params => {
        this.id = params['id'];
       
        this.apiService.getCocktailRecipe(this.id).subscribe(resp=>
         {
           this.cocktail = resp.drinks[0];
           this.apiService.doRequest(false);       
         });
   
       
      });
          
    }
  
  }
