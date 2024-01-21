# 2 - Basics

## 2.1 - Inference

Inference refers to the compiler **automatically determining the type of a variable or expression**. This happens without explicitly specifying the type, making the code more concise.

**TypeScript's static type system allows for type inference**, making it possible to write code that is **both concise and statically typed**. But explicit type annotations are still useful in certain situations.

```typescript
let x = 5; // x is inferred as type number
let y = "Hello, TypeScript!"; // y is inferred as type string

function add(a: number, b: number) {
  return a + b;
}

let result = add(3, 7); // result is inferred as type number
```

## 2.2 - Props

But **just the inference won't be enough**. Thus, in this first scenario, it'll be **necessary to type the props that a components receive**.

### 2.2.1 - Simple Example Declaring Props
<details>
<summary>Simple Example Declaring Props</summary>

```typescript
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

```typescript
//Button.tsx
import React from "react";

type ButtonProps = {
  size?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} style={{ fontSize: props.size }}>
      Increment
    </button>
  );
};

export default Button;
```
</details>
