import React from 'react'

// type ButtonProps = {
//   size?: string;
//   children: React.ReactNode
//   onClick?: () => void
// }

//React.PropsWithChildren is a type that automatically includes 'children: React.ReactNode' in its structure
// type ButtonPropsSecondExample = React.PropsWithChildren<{
//   size?: string;
//   onClick?: () => void
// }>

//React.ComponentProps will extract the props of a component (in this case <button>) and automatically including children if necessary
type ButtonPropsThirdExample = React.ComponentProps<'button'> & {
  size?: string;
}

//It's also common to destructure the props to use what is actually necessary
// const Button = ({ size, children, onClick, className }: ButtonPropsThirdExample) => {
//   return (
//     <button className={className} onClick={onClick} style={{ fontSize: size }}>{children}</button>
//   )
// }

//Besides that, it's possible to use the rest operator to reduce the amount of destructuring
const Button = ({ size, children, ...props }: ButtonPropsThirdExample) => {
  
  console.log(props); // output -> {className: 'btn', onClick: ƒ}
  
  return (
    <button {...props} style={{ fontSize: size }}>{children}</button>
  )
}


export default Button