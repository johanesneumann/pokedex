import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';


const routes: Routes = [
  { path: '', component: PokemonPageComponent },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class ApiPokemonRoutingModule { }
