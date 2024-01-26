import React, { useState } from 'react';
import Input from './Input';

function App() {

  const [data, setData] = useState('')

  return (
    <>
      <p>Travelling Start: {data}</p>
      <Input label="Email" id="email" marginBottom="1rem" type="email" />
      <Input label="Name" id="name" marginBottom="1rem" />
      <Input value={data} onChange={(event) => setData(event.currentTarget.value)} label="Check-in" id="checkin" marginBottom="1rem" type="date" />
      <Input label="Check-out" id="checkout" marginBottom="1rem" type="time" />
    </>
  )
}

export default App