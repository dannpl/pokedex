export default interface IPokemonContext {
  pokemons: any[];
  PokeTypes: IObjectKeys;
  getPokemons: (offset: number) => void;
  formatePokemonId: (id: number) => string;
}

export interface IObjectKeys {
  [key: string]: IPokeType;
}

export interface IPokeType {
  dafaultColor: string;
  badgeIcon: string;
}

export interface IPokemon {
  id: number;
  name: string;
  types: any;
  sprites: any;
}
