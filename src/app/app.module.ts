import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from './api.service';
import { SearchComponent } from './search/search.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SearchresultsComponent,
    RecipeComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
{ path : '', component: SearchresultsComponent},
{  path : 'recipe/:id', component: RecipeComponent }


      ]
    )
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
