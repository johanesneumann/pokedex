import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPageComponent } from './api-pokemon/pokemon-page/pokemon-page.component';
import { FavoritePokemonPageComponent } from './favorite-pokemon/favorite-pokemon-page/favorite-pokemon-page.component';


const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () => import('./api-pokemon/api-pokemon.module').then(mod => mod.ApiPokemonModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favorite-pokemon/favorite-pokemon.module').then(mod => mod.FavoritePokemonModule)
  },
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: '**', redirectTo: '/pokemon', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
