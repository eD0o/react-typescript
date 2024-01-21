import React, { Children } from 'react'

type ButtonProps = {
  size?: string;
  children: React.ReactNode
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} style={{ fontSize: props.size }}>{props.children}</button>
  )
}

export default Button