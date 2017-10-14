import { Component, OnInit } from '@angular/core';
import { ApiService, Recipe } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {
recipes : Recipe[];
query : string;



  constructor( private apiService : ApiService, private router: Router ) { }

  ngOnInit() {

    this.apiService.searchSubject.subscribe( (rec)=> { this.query = rec;
    
      this.apiService.searchRequest(this.query).then(recipes =>
        {
this.recipes = recipes;
// this.isRequiesting = false;
this.apiService.doRequest(false);
        }

      ).catch(error => {
            console.log(error.status);
            console.log(error.error); 
            console.log(error.headers);
             });
        }
    );

  }

  openRecipe(id)
  {
    this.recipes = null;
    this.apiService.doRequest(true);
    this.router.navigate(['/recipe', id]);

  }

}
