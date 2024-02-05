import React from 'react'


type IDateInput = React.ComponentProps<'input'> & {
  label: string;
}

const DateInput = ({ label, ...props }: IDateInput) => {

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...props} />
    </>
  )
}

export default DateInput