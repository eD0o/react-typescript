import React from 'react'

type InputProps = React.ComponentProps<"input"> & {
  label: string
  marginBottom?: string
  setState: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ label, marginBottom, setState, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom }}>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="text" onChange={({ currentTarget }) => setState(currentTarget.value)} {...props} />
    </div>
  )
}

export default Input