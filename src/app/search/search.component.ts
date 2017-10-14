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

  constructor( private apiService : ApiService, private router : Router ) {  }

  ngOnInit()
   {

  }

  submitForm()
  {
    this.router.navigate(['/']);
    if(this.query!=='')
this.apiService.makeSearch(this.query);
this.apiService.doRequest(true);
  }

}
