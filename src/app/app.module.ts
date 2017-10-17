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
import { RecipesComponent } from './recipe/recipe.component';
import { SpinnerDirective } from './spinner/spinner.directive';
import { CocktailComponent } from './cocktail/cocktail.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SearchresultsComponent,
    RecipesComponent,
    SpinnerDirective,
    CocktailComponent,
    LeftnavComponent,
    CategoryComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
{ path : '', component: CategoryComponent},
{ path : 'search', component: SearchresultsComponent},
{ path : 'cocktail/:id', component: CocktailComponent }


      ]
    )
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
