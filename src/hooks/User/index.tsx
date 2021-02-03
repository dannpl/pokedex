import React, { createContext, useContext } from 'react';

import IUserContext from './interface';

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: React.FC = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

const UserCreateContext = (): IUserContext => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserCreateContext must be used within an PokemonProvider');
  }

  return context;
};

export { UserContext, UserProvider, UserCreateContext };
