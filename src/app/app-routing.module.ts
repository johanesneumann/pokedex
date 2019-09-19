import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';


const routes: Routes = [
  { path: '', component: PokemonPageComponent, pathMatch: 'full' },
  { path: 'pokemon', component: PokemonPageComponent },
  // { path: 'detail/:id', component: PokemonDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
