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
