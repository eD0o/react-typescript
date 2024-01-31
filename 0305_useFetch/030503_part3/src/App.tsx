import React from 'react';
import useFetch from './useFetch';

type Product = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean
}

function App() {
  
  const products = useFetch<Product[]>("https://data.origamid.dev/produtos/")

  return (
    <>
      <p>tsx content</p>
    </>
  )
}

export default App
