import { Component, OnInit } from '@angular/core';
import {ApiService, RecipeDetails, SingleRecipe } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
id : number;
recipe :SingleRecipe;
isRequesting: boolean;

  constructor( private apiService :ApiService, private route : ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    
   
   this.route.params.subscribe( params => {
     this.id = params['id'];
    // console.log(this.id);

     this.apiService.getRecipe(this.id).subscribe(resp=>
      {
        this.recipe = resp.recipe;
        this.apiService.doRequest(false);       
      });

    
   });

    
   

  }

}
