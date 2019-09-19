import { PokemonReference } from './pokemonReference';

export class PokemonPage {
    count: number;
    previous: string;
    next: string;
    results: PokemonReference;
    constructor(
        count: number,
        next: string,
        results: PokemonReference
    ) {
        this.count = count;
        this.next = next;
        this.results = results;
    }
}


