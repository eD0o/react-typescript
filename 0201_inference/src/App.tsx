import React, { useState } from 'react';
import Button from './Button';

function App() {

  const [total, setTotal] = useState(0)

  const increment = () => {
    setTotal((total) => total + 1)
  }

  return (
    <>
      <p>{total}</p>
      <button onClick={increment}>Increment</button>
      <Button/> {/* to pass props, will be necessary to type them */}
    </>
  )
}

export default App
