import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokemonDetailComponent,
    PaginatorComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    PokemonDetailComponent,
    PaginatorComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class PokemonComponentsModule { }
