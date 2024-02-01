import React, { useContext } from 'react'
import { useUi } from './UiContext'

const Header = () => {

  const { setDark } = useUi()


  return (
    <button onClick={() => setDark((d) => !d)}>Toggle</button>
  )
}

export default Header