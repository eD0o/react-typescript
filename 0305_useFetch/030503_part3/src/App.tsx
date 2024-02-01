import React, { useState } from 'react';
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

  const [id, setId] = useState("p001");

  const products = useFetch<Product[]>("https://data.origamid.dev/produtos/")

  const product = useFetch<Product>(`https://data.origamid.dev/produtos/${id}`, {
    cache: "force-cache"
  })

  return (
    <>
      <section className="flex">
        <div>
          {products.data
            && products.data.map((product) => (
              <button onClick={() => setId(product.id)} style={{ fontSize: "1rem" }} key={product.id}>{product.id}: {product.nome} </button>
            ))}
        </div>
        <div>
          {product.data && (
            <ul>
              <li>ID: {product.data.id}</li>
              <li>Name: {product.data.nome}</li>
              <li>Description: {product.data.descricao}</li>
              <li>Quantity: {product.data.quantidade}</li>
            </ul>
          )}
        </div>
      </section>
    </>
  )
}

export default App