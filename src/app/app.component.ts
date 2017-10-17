import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cocktails';
  isRequesting : Boolean;

  constructor(private apiService : ApiService) {

  }
  
  ngOnInit() {
    this.apiService.isRequesting.subscribe(param =>
      {
        this.isRequesting = param;
      });

  }



}
