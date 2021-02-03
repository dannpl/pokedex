import React from 'react';

import { UserProvider } from './User';
import { PokemonProvider } from './Pokemon';

const AppProvider: React.FC = ({ children }) => (
  <>
    <UserProvider>
      <PokemonProvider>{children}</PokemonProvider>
    </UserProvider>
  </>
);

export default AppProvider;
