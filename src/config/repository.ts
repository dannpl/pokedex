import { AxiosPromise } from 'axios';

import ApiService from './apiService';

export default class Repository {
  public api: ApiService = new ApiService();

  constructor() {
    //
  }

  getPokemons(offset?: number): Promise<AxiosPromise> {
    return this.api.get(`pokemon/?&offset=${offset}&limit=35`);
  }

  getPokemonByName(name: string): Promise<AxiosPromise> {
    return this.api.get(`pokemon/${name}`);
  }

  getPokemonSpecies(name: string): Promise<AxiosPromise> {
    return this.api.get(`pokemon-species/${name}`);
  }
}
