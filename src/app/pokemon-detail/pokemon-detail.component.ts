import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Pokemon } from '../common/pokemon';
import { PokemonReference } from '../common/pokemonReference';
import { PokemonService } from '../services/pokemon.service';

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
    this.pokemonService.getPokemon(this.pokemonReference.name).subscribe((pokemon: Pokemon) => this._pokemon = pokemon);
  }

  get pokemon(): Pokemon {
    return this._pokemon;
  }
}
