import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonPage } from '../common/pokemonPage';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  private page: PokemonPage;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemonList(20, 0).subscribe(pokemonPage => this.page = pokemonPage);
  }

  get pokemonPage(): PokemonPage {
    return this.page;
  }

}
