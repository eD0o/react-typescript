import React from 'react'

type InputProps = React.ComponentProps<"input"> & {
  label: string
  marginBottom?: string
}

const Input = ({ label, marginBottom, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom }}>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="text" {...props} />
    </div>
  )
}

export default Input