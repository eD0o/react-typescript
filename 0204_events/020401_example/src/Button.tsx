import React from 'react'

//after the paranthesis, it's the function return
//in this case, it's actually not necessary to explicit what'll be returned because typescript will infer it
const Button = ({ children }: React.PropsWithChildren): JSX.Element => {

  // always declare the correct type of the event, for example here it wasn't just MouseEvent, but React.MouseEvent
  // const handleClick = (event: React.MouseEvent) => {
  //   console.log(event.pageX);
  // }

  // and when the function has the type React.MouseEventHandler, it's not necessary to declare the event type
  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
  }

  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button