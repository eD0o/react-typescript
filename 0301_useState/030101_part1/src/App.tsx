import React, { useEffect, useState } from 'react';
import Button from './Button';

function user() {
  return {
    name: 'Eduardo',
    profession: 'Developer'
  }
}

type User = {
  name: string;
  profession: string;
}

function App() {

  const [data, setData] = useState<null | User>(null);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setData(user())
    }, 1000)
  }, [])

  return (
    <>
      <div>
        <p>Total: {total}</p>
        <Button increment={setTotal} />
      </div>
      {data !== null && <div>{data.name}: {data.profession}</div>}
    </>
  )
}

export default App
