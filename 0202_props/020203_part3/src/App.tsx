import React, { useState } from 'react';
import Button from './Button';

function App() {

  const [total, setTotal] = useState(0)

  const increment = () => {
    setTotal((total) => total + 1)
  }

  return (
    <>
      <p>Total: {total}</p>
      <Button className='btn' onClick={increment} size="1.5rem">Increment</Button>
    </>
  )
}

export default App