import React, { useEffect, useState } from 'react'

//defining the parameters and also beside the ":" the return
const useLocalStorage = (key: string, initial: string): [string, React.Dispatch<React.SetStateAction<string>>] => {

  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key)
    return local ? local : initial
  });

  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])

  // it's also possible to define the return using as const as below
  // return [state, setState] as const;

  return [state, setState];

}

export default useLocalStorage