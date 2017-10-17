import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

query: string;
// bigQuery : searchQuery;
searchtype : string;
cocktailUrl : string = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
ingredientUrl : string = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

  constructor( private apiService : ApiService, private router : Router ) {  }

  ngOnInit()
  {

  }

  submitForm()
  {
    
   /* if(!this.searchtype)
      this.searchtype = 'name';
*/
   // var bigQuery: searchQuery = { 'term' : this.query, 'searchType' : this.searchtype }

    if(this.query!==null)
    {
       // this.apiService.makeSearch(bigQuery);
        this.apiService.doRequest(true);

        switch(this.searchtype) {
          case 'ingredient':
       
          this.apiService.cocktailRequest(this.query, this.ingredientUrl).subscribe(recipes =>
            {  
              this.apiService.doRequest(false);
              this.apiService.showCocktails(recipes);             
            }
   
        );
  
          case 'name':
            this.apiService.cocktailRequest(this.query, this.cocktailUrl).subscribe(recipes =>
           {  
             this.apiService.doRequest(false);
             this.apiService.showCocktails(recipes);             
           }
  
       );
              break;
  
            }  

      /*  switch(this.searchtype) {
          case 'ingredient':
            this.router.navigate(['searchingredient']);
          case 'name':  */
            this.router.navigate(['search']);
        /* break;
    } */
  }

}

}
