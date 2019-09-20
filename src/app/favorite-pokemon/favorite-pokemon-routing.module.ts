import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePokemonModule } from './favorite-pokemon.module';
import { FavoritePokemonPageComponent } from './favorite-pokemon-page/favorite-pokemon-page.component';


const routes: Routes = [
    { path: '', component: FavoritePokemonPageComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FavoritePokemonRoutingModule {

}
