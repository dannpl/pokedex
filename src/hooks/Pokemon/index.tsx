import React, { createContext, useCallback, useState, useContext } from 'react';

import Repository from '../../config/repository';
import IPokemonContext from './interface';

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider: React.FC = ({ children }) => {
  const api: Repository = new Repository();
  // add type
  const [data, setData]: [any[], React.Dispatch<any>] = useState([]);
  const [offset]: [number, React.Dispatch<number>] = useState(0);

  const getPokemons = useCallback(async () => {
    try {
      const response = await api.getPokemons(offset);

      for (let i = 0; i < response.data.results.length; i++) {
        const pokemonResponse = await api.getPokemonByName(
          response.data.results[i].name,
        );

        // add type
        setData((prevState: any) => {
          return [...prevState, pokemonResponse.data];
        });
      }
    } catch (error) {
      throw new Error('');
    }
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons: data, getPokemons }}>
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
