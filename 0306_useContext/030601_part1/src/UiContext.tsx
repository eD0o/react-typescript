import React, { PropsWithChildren, useContext, useState } from 'react';

type IUiContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

// a way to force typescript to firstly define null in the Context if necessary
// const UiContext = React.createContext<IUiContext>({} as IUiContext);

export const UiContext = React.createContext<IUiContext | null>(null);

// but this function is necessary in the way to avoid errors if the provider is not defined
export const useUi = () => {
  const context = useContext(UiContext)

  if(context === null) throw new Error('useContext must be inside the Provider')
  return context;
}

export const UiContextProvider = ({ children }: PropsWithChildren) => {

  const [dark, setDark] = useState(false)

  return <UiContext.Provider value={{ dark, setDark }}>{children}</UiContext.Provider>
}