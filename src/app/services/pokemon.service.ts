import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../common/pokemon';
import { PokemonPage } from '../common/pokemonPage';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonURL: string = environment.pokeapi + 'pokemon';

  constructor(private httpClient: HttpClient) {
  }

  getPokemonList(limit: number, offset: number): Observable<PokemonPage> {
    if (limit == null && limit === 0) {
      limit = 20;
    }
    if (offset == null) {
      offset = 0;
    }
    return this.httpClient.get<PokemonPage>(`${this.pokemonURL}?offset=${offset}&limit=${limit}`);
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.pokemonURL}/${name}`);
  }
}
