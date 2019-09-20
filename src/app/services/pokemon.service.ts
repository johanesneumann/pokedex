import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../common/model/pokemon.model';
import { PokemonPage } from '../common/model/pokemonPage.model';
import { PokemonReference } from '../common/model/pokemonReference.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonURL: string = environment.pokeapi + 'pokemon';
  favoritePokemonsKey = 'fav.pokemon.references';

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

  getFavoritePokemons(): PokemonReference[] {
    let favorites = localStorage.getItem(this.favoritePokemonsKey);
    if (!favorites) {
      favorites = '[]';
    }
    return JSON.parse(favorites);
  }

  addFavoritePokemon(favoritePokemon: PokemonReference) {
    const favorites: PokemonReference[] = this.getFavoritePokemons();
    favorites.push(favoritePokemon);
    localStorage.setItem(this.favoritePokemonsKey, JSON.stringify(favorites));
  }

  removeFavoritePokemon(favoritePokemon: PokemonReference) {
    let favorites: PokemonReference[] = this.getFavoritePokemons();
    favorites = favorites.filter(pokemon => pokemon.name !== favoritePokemon.name);
    localStorage.setItem(this.favoritePokemonsKey, JSON.stringify(favorites));
  }

  clearFavoritePokemons() {
    localStorage.removeItem(this.favoritePokemonsKey);
  }

  isPokemonFavorite(pokemon: PokemonReference): boolean {
    const a = this.getFavoritePokemons().map(favorite => favorite.name).find(name => name === pokemon.name);
    return a !== undefined;
  }
}
