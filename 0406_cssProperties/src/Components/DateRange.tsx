import React, { useState } from 'react'
import DateInput from './DateInput'

const DateRange = () => {

  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  return (
    <form onSubmit={(e) => e.preventDefault} className="box flex">
      <DateInput label="Start" value={start} onChange={({ target }) => setStart(target.value)} />{start}
      <DateInput label="End" value={end} onChange={({ target }) => setEnd(target.value)} />{end}
    </form>
  )
}

export default DateRange