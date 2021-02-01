import React, { useEffect } from 'react';

import Input from '../../components/Input';
import PokeCard from '../../components/PokeCard';

import { PokemonCreateContext } from '../../hooks/Pokemon';

import { Container, Header, WrapperTitle, PokeballBackground } from './styles';

import SearchIcon from '../../assets/img/search.png';
import PokeballBg from '../../assets/img/pokeballbg.png';
import FilterIcon from '../../assets/img/filters.png';
import SortIcon from '../../assets/img/sort.png';
import GenerationIcon from '../../assets/img/generation.png';

const Home: React.FC = () => {
  const { getPokemons, pokemons } = PokemonCreateContext();

  useEffect(() => {
    getPokemons(0);
  }, []);

  return (
    <Container>
      <PokeballBackground src={PokeballBg} alt="Pokeball icon" />
      <Header>
        <img src={FilterIcon} alt="Filter icon" />
        <img src={SortIcon} alt="Sort icon" />
        <img src={GenerationIcon} alt="Geeneration icon" />
      </Header>
      <WrapperTitle>
        <p className="title">Pokédex</p>
        <span className="subtitle">
          Search for Pokémon by name or using the National Pokédex number.
        </span>
        <Input
          icon={SearchIcon}
          placeholder="What Pokémon are you looking for?"
        />
      </WrapperTitle>
      {pokemons.map((item: any) => (
        <PokeCard key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default Home;
