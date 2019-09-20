import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePokemonPageComponent } from './favorite-pokemon-page/favorite-pokemon-page.component';
import { FavoritePokemonRoutingModule } from './favorite-pokemon-routing.module';
import { PokemonComponentsModule } from '../common/pokemon-components/pokemon-components.module';



@NgModule({
  declarations: [
    FavoritePokemonPageComponent
  ],
  imports: [
    CommonModule,
    PokemonComponentsModule,
    FavoritePokemonRoutingModule,
  ]
})
export class FavoritePokemonModule { }
