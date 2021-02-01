export default interface IPokemonContext {
  pokemons: any[];
  getPokemons: (offset: number, limit?: number) => void;
}
