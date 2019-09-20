import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexComponentsModule } from '../common/pokedex-components/pokedex-components.module';
import { ApiPokemonRoutingModule } from './api-pokemon-routing.module';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';


@NgModule({
  declarations: [
    PokemonPageComponent
  ],
  imports: [
    CommonModule,
    PokedexComponentsModule,
    ApiPokemonRoutingModule
  ]
})
export class ApiPokemonModule { }
