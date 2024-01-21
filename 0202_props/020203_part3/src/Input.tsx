import React from 'react'

type InputProps = React.ComponentProps<"input"> & {
  label: string
  marginBottom?: string
  id: string
}

const Input = ({ label, marginBottom, id, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: marginBottom }}>
      <label htmlFor={label}>{label}</label>
      {/* even being already text, the prop "type" will be replaced by the rest operator prop */}
      <input id={id} name={id} type="text" {...props} />
    </div>
  )
}

export default Input