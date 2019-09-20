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
  private _pageSize = 20;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadPage(this.pageSize, 0);
  }

  get pokemonPage(): PokemonPage {
    return this.page;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  onPageChanged($event) {
    console.log($event);
    this.loadPage($event.limit, $event.offset);
  }

  loadPage(limit: number, offset: number) {
    this.pokemonService.getPokemonList(limit, offset).subscribe(pokemonPage => this.page = pokemonPage);
  }
}
