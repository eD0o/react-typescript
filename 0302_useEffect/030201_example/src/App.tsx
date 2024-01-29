import React, { useEffect } from 'react';

function App() {


  // useEffect(() => {
  //   console.log('mounted');

  //   return () => {
  //     console.log('dismounted');
  //   }
  // }, [])

  //it's the same thing as the first commented example
  const useEffectCallback = () => {
    console.log('mounted');

    return () => {
      console.log('dismounted');
    }
  }

  useEffect(useEffectCallback, [])

  return (
    <>
      <p>see console.log</p>
    </>
  )
}

export default App
