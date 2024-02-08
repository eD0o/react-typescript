import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { ISale } from '../Context/DataContext';
import Loading from '../Components/Loading';

// creating a new interface without the field data
type ISaleWithoutDate = Omit<ISale, 'data'>

const Sale = () => {

  const { id } = useParams();

  const { data, loading } = useFetch<ISaleWithoutDate>(`https://data.origamid.dev/vendas/${id}`);

  if (loading) return <Loading/>

  if (data === null) return null

  return (
    <div>
      <div className='box mb'><p> ID: {data.id}</p></div>
      <div className='box mb'><p> Nome: {data.nome}</p></div>
      <div className='box mb'><p> Preço: {data.preco.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}</p></div>
      <div className='box mb'><p> Status: {data.status}</p></div>
      <div className='box mb'><p> Payment: {data.pagamento}</p></div>
    </div>
  )
}

export default Sale