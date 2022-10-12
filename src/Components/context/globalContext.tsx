import React, { SetStateAction, Dispatch } from 'react';

interface GlobalContextType {
  token: boolean;
  setToken: Dispatch<SetStateAction<boolean>>;
}

const GlobalContextTypeValue: GlobalContextType = {
  token: false,
  setToken: () => false,
};

export const GlobalContext = React.createContext<GlobalContextType>(
  GlobalContextTypeValue
);
