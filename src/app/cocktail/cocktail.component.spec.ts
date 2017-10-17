import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailComponent } from './cocktail.component';

describe('CocktailComponent', () => {
  let component: CocktailComponent;
  let fixture: ComponentFixture<CocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
