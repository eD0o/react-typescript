import React, { useContext } from 'react';
import useFetch from '../Hooks/useFetch';

type IDataContext = {
  data: ISale[] | null;
  loading: boolean;
  error: string | null;
}

type ISale = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be in DataContextProvider')
  return context;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {

  const { data, loading, error } = useFetch<ISale[]>('https://data.origamid.dev/vendas');

  return <DataContext.Provider value={{ data, loading, error }}>{children}</DataContext.Provider>
}