import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePokemonPageComponent } from './favorite-pokemon-page.component';

describe('FavoritePokemonPageComponent', () => {
  let component: FavoritePokemonPageComponent;
  let fixture: ComponentFixture<FavoritePokemonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePokemonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
