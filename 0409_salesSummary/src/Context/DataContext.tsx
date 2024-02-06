import React, { useContext, useState } from 'react';
import useFetch from '../Hooks/useFetch';

type IDataContext = {
  data: ISale[] | null;
  loading: boolean;
  error: string | null;
  start: string;
  setStart: React.Dispatch<React.SetStateAction<string>>;
  end: string;
  setEnd: React.Dispatch<React.SetStateAction<string>>;
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

const getDate = (n: number) => {
  const date = new Date();
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be in DataContextProvider')
  return context;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {

  const [start, setStart] = useState(getDate(30))
  const [end, setEnd] = useState(getDate(0))

  const { data, loading, error } = useFetch<ISale[]>(`https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`);

  return <DataContext.Provider value={{ data, loading, error, start, setStart, end, setEnd }}>{children}</DataContext.Provider>
}