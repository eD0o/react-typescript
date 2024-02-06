import MonthButton from './MonthButton'

const Months = () => {
  return (
    <>
      <div className="flex">
        <MonthButton n={-2} />
        <MonthButton n={-1} />
        <MonthButton n={0} />
      </div>
    </>
  )
}

export default Months