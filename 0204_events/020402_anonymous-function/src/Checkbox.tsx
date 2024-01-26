import React, { useState } from 'react'

const Checkbox = ({ label }: { label: string }) => {

  const [value, setValue] = useState(false)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.checked)
  }

  return (
    <label htmlFor="" style={{
      borderBottom: value ? "2px solid green" :  "2px solid red"
    }}>
      <input type="checkbox" checked={value} onChange={handleChange} />
      {label}
    </label>
  )
}

export default Checkbox