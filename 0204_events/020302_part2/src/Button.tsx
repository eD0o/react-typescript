import React from 'react'

type ButtonProps = React.ComponentProps<"button"> & {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

const Button = ({ total, setTotal }: ButtonProps) => {

  return (
    <button onClick={() => setTotal((t) => t + 1)}>Increment {total}</button>
  )
}

export default Button