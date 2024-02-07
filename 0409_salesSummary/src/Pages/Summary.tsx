import { useData } from '../Context/DataContext';

const Summary = () => {

  const { data } = useData();



  if (data === null) return null

  return (
    <section>
      <div className="summary flex mb">
        <div className='box'>
          <h2>Sales</h2>
          <p>
            {data.filter((i) => i.status !== 'falha').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className='box'>
          <h2>Received</h2>
          <p>
            {data.filter((i) => i.status === 'pago').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className='box'>
          <h2>Processing</h2>
          <p>
            {data.filter((i) => i.status === 'processando').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </div>
      <div className="box">Graphics</div>
    </section>
  )
}

export default Summary