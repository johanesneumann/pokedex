import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PokemonReference } from 'src/app/common/model/pokemonReference.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-favorite-pokemon-page',
  templateUrl: './favorite-pokemon-page.component.html',
  styleUrls: ['./favorite-pokemon-page.component.scss']
})
export class FavoritePokemonPageComponent implements OnInit {


  favoritePokemons: PokemonReference[] = [];
  hasFavorites = false;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.favoritePokemons = this.pokemonService.getFavoritePokemons();
    this.hasFavorites = this.favoritePokemons.length > 0;
  }

  favoriteChanged($event) {
    this.ngOnInit();
  }

}
