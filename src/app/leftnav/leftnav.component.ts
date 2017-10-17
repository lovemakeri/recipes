import { Component, OnInit } from '@angular/core';
import {ApiService, Category } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {

  categories : Category[];

  constructor( private apiService: ApiService, private router: Router) { }

  ngOnInit()
  {

    this.apiService.getCategories().subscribe( resp =>
      {
           this.categories = resp.drinks;
      }

    );
  }


  selectCategory(category)
  {
    this.apiService.doRequest(true);
      this.apiService.showCategory(category);
      
      
      this.router.navigate(['']);
  }

}
