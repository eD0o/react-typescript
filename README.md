# 2 - Basics

## 2.1 - Inference

Inference refers to the compiler `automatically determining the type of a variable or expression`. This happens without explicitly specifying the type, making the code more concise.

`TypeScript's static type system allows for type inference`, making it possible to write code that is `both concise and statically typed`. But explicit type annotations are still useful in certain situations.

```ts
let x = 5; // x is inferred as type number
let y = "Hello, TypeScript!"; // y is inferred as type string

function add(a: number, b: number) {
  return a + b;
}

let result = add(3, 7); // result is inferred as type number
```

## 2.2 - Props

But `just the inference won't be enough`. Thus, in this first scenario, it'll be `necessary to type the props that a components receive`.

<details>
<summary>Simple Example Declaring Props</summary>

```ts
//App.tsx
return (
  <>
    <p>Total: {total}</p>
    <Button onClick={increment} size="1.5rem">
      Increment
    </Button>
  </>
);
```

```ts
//Button.tsx
import React from "react";

//declaring the props just using "conventional" type
//the '?' sytmbol is used to declare if it's required or no
type ButtonProps = {
  size?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} style={{ fontSize: props.size }}>
      {props.children}
    </button>
  );
};

export default Button;
```

</details>

---

<details>
<summary>React.PropsWithChildren</summary>

```ts
//App.tsx
return (
  <>
    <p>Total: {total}</p>
    <Button onClick={increment} size="1.5rem">
      Increment
    </Button>
  </>
);
```

```ts
//Button.tsx
import React from "react";

//React.PropsWithChildren is a type that automatically includes 'children: React.ReactNode' in its structure
type ButtonPropsSecondExample = React.PropsWithChildren<{
  size?: string;
  onClick?: () => void;
}>;

const Button = (props: ButtonPropsSecondExample) => {
  return (
    <button onClick={props.onClick} style={{ fontSize: props.size }}>
      {props.children}
    </button>
  );
};

export default Button;
```

</details>

---

<details>
<summary>React.ComponentProps</summary>

```ts
//App.tsx
return (
  <>
    <p>Total: {total}</p>
    <Button onClick={increment} size="1.5rem">
      Increment
    </Button>
  </>
);
```

```ts
//Button.tsx
import React from "react";

//React.ComponentProps will extract the props of a component (in this case <button>) and automatically including children if necessary
type ButtonPropsThirdExample = React.ComponentProps<"button"> & {
  size?: string;
};

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
    <button {...props} style={{ fontSize: size }}>
      {children}
    </button>
  );
};

export default Button;
```

</details>

## 2.3 - Interfaces and Types

### 2.3.1 - Declarations

React interfaces with TypeScript `are also available directly in the React object` imported from React.

```ts
import React from "react";
//
const Button = ({ children }: React.PropsWithChildren) => {
  return <button>{children}</button>;
};

export default Button;
```

### 2.3.2 - JSX.Element

`Element returned` by the component. It can also be: React.ReactElement and React.JSX.Element. `There's need to declare, as React already infers` the same.

<details>
<summary>JSX.Element and Mouse Event Example</summary>

```ts
//App.tsx
import React from "react";
import Button from "./Button";

function App() {
  return (
    <>
      <Button>Increment</Button>
    </>
  );
}

export default App;
```

```ts
//Button.tsx
import React from "react";

/*
after the paranthesis, it's the function return
in this case, it's actually not necessary to explicit what'll be returned because typescript will infer it
always declare the correct type of the event, for example here it wasn't just MouseEvent, but React.MouseEvent
an onClick event in React is a React event and not a native JavaScript event
*/
const Button = ({ children }: React.PropsWithChildren): JSX.Element => {
  // const handleClick = (event: React.MouseEvent) => {
  //   console.log(event.pageX);
  // }

  // when the function has the type React.MouseEventHandler, it's not necessary to declare the event type React.MouseEvent
  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
```

</details>
