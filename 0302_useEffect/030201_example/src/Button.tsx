import React from 'react'

type ButtonProps = {
  increment: React.Dispatch<React.SetStateAction<number>>
}

const Button = ({ increment }: ButtonProps) => {
  return (
    <button onClick={() => increment((n) => n + 1)}>Increment</button>
  )
}

export default Button