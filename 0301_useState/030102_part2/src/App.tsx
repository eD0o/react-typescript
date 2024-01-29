import React, { useEffect, useState } from 'react';
import Input from './Input'

type Sale = {
  id: string;
  nome: string;
  status: string;
}

function App() {

  const [date, setDate] = useState<null | Sale[]>(null)
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  useEffect(() => {
    if (start !== '' && end !== '') {
      fetch(`https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`)
        .then((r) => r.json())
        .then((json) => setDate(json as Sale[]))
        .catch((error) => console.log(error));
    }
  }, [start, end])

  return (
    <>
      <div>
        <Input label="Start" marginBottom='1rem' value={start} type='date' setState={setStart} />
        <Input label="End" marginBottom='1rem' value={end} type='date' setState={setEnd} />
      </div>
      <ul>
        {date &&
          date.map((sale) => (
            <li key={sale.id}>
              {sale.nome}: {sale.status}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
