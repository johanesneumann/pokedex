import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PaginatorComponent } from './common/components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonPageComponent,
    PokemonDetailComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
