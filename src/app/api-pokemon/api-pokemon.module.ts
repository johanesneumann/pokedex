import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonComponentsModule } from '../common/pokemon-components/pokemon-components.module';
import { ApiPokemonRoutingModule } from './api-pokemon-routing.module';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';


@NgModule({
  declarations: [
    PokemonPageComponent
  ],
  imports: [
    CommonModule,
    PokemonComponentsModule,
    ApiPokemonRoutingModule
  ]
})
export class ApiPokemonModule { }
