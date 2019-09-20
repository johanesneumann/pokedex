import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePokemonPageComponent } from './favorite-pokemon-page.component';
import { PokedexComponentsModule } from 'src/app/common/pokedex-components/pokedex-components.module';

describe('FavoritePokemonPageComponent', () => {
  let component: FavoritePokemonPageComponent;
  let fixture: ComponentFixture<FavoritePokemonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PokedexComponentsModule
      ],
      declarations: [FavoritePokemonPageComponent]
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
