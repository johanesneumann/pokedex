import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Pokemon } from '../../model/pokemon.model';
import { PokemonReference } from '../../model/pokemonReference.model';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements AfterViewInit {
  // tslint:disable-next-line: no-input-rename
  @Input('pokemon-reference') pokemonReference: PokemonReference;

  // tslint:disable-next-line: variable-name
  private _pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngAfterViewInit(): void {
    if (this.pokemonReference) {
      this.pokemonService.getPokemon(this.pokemonReference.name).subscribe((pokemon: Pokemon) => this._pokemon = pokemon);
    }
  }

  get pokemon(): Pokemon {
    return this._pokemon;
  }

  addOrRemoveFavorite() {
    if (this.pokemonService.isPokemonFavorite(this.pokemonReference)) {
      this.pokemonService.removeFavoritePokemon(this.pokemonReference);
    } else {
      this.pokemonService.addFavoritePokemon(this.pokemonReference);
    }
  }

  isFavorite(): boolean {
    return this.pokemonService.isPokemonFavorite(this.pokemonReference);
  }
}
