import React, { createContext, useState, useContext } from 'react';

import IPokemonContext, { PokeTypes, IPokemon } from './interface';

import Repository from '../../config/repository';

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider: React.FC = ({ children }) => {
  const api = new Repository();
  const [pokemon, setPokemon] = useState({} as IPokemon);
  const [data, setData]: [IPokemon[], React.Dispatch<any>] = useState([]);

  const getPokemons = async (offset: number) => {
    try {
      const response = await api.getPokemons(offset);

      for (let i = 0; i < response.data.results.length; i++) {
        const item = response.data.results[i];
        const pokemonInfo = await api.getPokemonByName(item.name);

        setData((prevState: IPokemon[]) => {
          return [...prevState, pokemonInfo.data];
        });
      }
    } catch {}
  };

  const setCurrentPokemon = async (pokemon: IPokemon) => {
    try {
      const response = await api.getPokemonSpecies(pokemon.name);
      pokemon.species = { ...pokemon.species, ...response.data };

      setPokemon((prevState) => {
        return { ...prevState, ...pokemon };
      });
    } catch {}
  };

  const resetPokemons = () => {
    setData([]);
  };

  const searchPokemon = async (name: string) => {
    try {
      const response = await api.getPokemonByName(name.toLowerCase());

      setData([{ ...response.data }]);
    } catch {}
  };

  const formatePokemonId = (id: number) => {
    const currentId = id.toString();
    let zero = '';

    if (currentId.length === 1) zero = '00';

    if (currentId.length === 2) zero = '0';

    return `${zero}${id}`;
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: data,
        getPokemons,
        PokeTypes,
        formatePokemonId,
        resetPokemons,
        searchPokemon,
        setCurrentPokemon,
        currentPokemon: pokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const PokemonCreateContext = (): IPokemonContext => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error(
      'PokemonCreateContext must be used within an PokemonProvider',
    );
  }

  return context;
};

export { PokemonContext, PokemonProvider, PokemonCreateContext };
