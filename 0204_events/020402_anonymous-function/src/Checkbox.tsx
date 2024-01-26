import React, { useState } from 'react'

const Checkbox = ({ label }: { label: string }) => {

  const [value, setValue] = useState(false)

  return (
    <label htmlFor="" style={{
      borderBottom: value ? "2px solid green" : "2px solid red"
    }}>
      <input type="checkbox" checked={value} onChange={({ currentTarget }) => setValue(currentTarget.checked)}/>
      {label}
    </label>
  )
}

export default Checkbox