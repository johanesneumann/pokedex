import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePokemonPageComponent } from './favorite-pokemon-page/favorite-pokemon-page.component';
import { FavoritePokemonRoutingModule } from './favorite-pokemon-routing.module';
import { PokedexComponentsModule } from '../common/pokedex-components/pokedex-components.module';



@NgModule({
  declarations: [
    FavoritePokemonPageComponent
  ],
  imports: [
    CommonModule,
    PokedexComponentsModule,
    FavoritePokemonRoutingModule,
  ]
})
export class FavoritePokemonModule { }
