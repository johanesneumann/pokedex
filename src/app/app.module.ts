import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritePokemonModule } from './favorite-pokemon/favorite-pokemon.module';
import { ApiPokemonModule } from './api-pokemon/api-pokemon.module';
import { PokemonComponentsModule } from './common/pokemon-components/pokemon-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PokemonComponentsModule,
    ApiPokemonModule,
    FavoritePokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
