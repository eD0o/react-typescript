import React, { useState } from 'react';
import Button from './Button';

function App() {

  const [total, setTotal] = useState(0)

  return (
    <>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
    </>
  )
}

export default App