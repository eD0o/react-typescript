# 3 - Hooks with TSX

## 3.1 - useState

React does a good job inferring what type you have in the useState. But `use Generics to describe the possible multiple types` that it can have.

<details>
<summary>Example using Generics</summary>

```ts
//App.tsx
import React from "react";

function user() {
  return {
    name: "Eduardo",
    profession: "Developer",
  };
}

type User = {
  name: string;
  profession: string;
};

function App() {
  //Generics
  const [data, setData] = React.useState<null | User>(null);

  React.useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      {data && (
        <div>
          {data.name}: {data.profession}
        </div>
      )}
    </div>
  );
}

export default App;
```

</details>

### 3.1.1 - React.Dispatch

React.Dispatch<React.SetStateAction<type>> is the type of the `function that modifies the state of the useState hook` (setState). It can also be `displayed by using mouse hovering the setState` (VSCode hints).

![](https://i.imgur.com/FcwP1pU.png)

![](https://i.imgur.com/ZkjiDkl.png)

<details>
<summary>React.Dispatch Example</summary>

```ts
//App.tsx
import React from "react";
import Button from "./Button";

function App() {
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Button increment={setTotal} />
    </div>
  );
}

export default App;
```

```ts
// Button.tsx
import React from 'react';

type Button = {
   increment: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ increment }: Button) => {
   return (
     <button onClick={() => increment((total) => total + 1)}>
       Increment
     </button>
   );
};

export defaultButton;
```

</details>

## 3.2 - useEffect

There's `NO need to declare any special type in useEffect`, it is a hook that `receives a function` (function activated in the effect) `that returns a function` (function activated when the component is "dismounted"). It `can't be async neither`.

<details>
<summary>useEffect callback example</summary>

```ts
// App.tsx
import React, { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   console.log('mounted');

  //   return () => {
  //     console.log('dismounted');
  //   }
  // }, [])

  //it's the same thing as the first commented example, a ready function that will used with some effect
  const useEffectCallback = () => {
    console.log("mounted");

    return () => {
      console.log("dismounted");
    };
  };

  useEffect(useEffectCallback, []);

  return (
    <>
      <p>see console.log</p>
    </>
  );
}

export default App;
```

</details>

## 3.3 - useRef

It's necessary to `declare the element type of **useRef<Element>** when used to manipulate objects`.

`To see the type of the Element, just hover it` and see what is showed. In this case it was <HTMLVideoElement>.

![](https://i.imgur.com/OKIRkE4.png)

<details>
<summary>useRef video example</summary>

```ts
// App.tsx
import React, { useEffect, useRef } from "react";
import videoSrc from "./video.mp4";

function App() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log(video.current);
  }, []);

  return (
    <>
      <div className="flex">
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </>
  );
}

export default App;
```

</details>

## 3.4 - Custom Hook

We `must type its parameters and the return`.

<details>
<summary>useLocalStorage example</summary>

```ts
// App.tsx
import React, { useEffect, useRef } from "react";
import videoSrc from "./video.mp4";
import useLocalStorage from "./useLocalStorage";

function App() {
  const video = useRef<HTMLVideoElement>(null);

  const [volume, setVolume] = useLocalStorage("volume", "0");

  useEffect(() => {
    if (!video.current) return;
    const n = Number(volume);
    if (n >= 0 && n <= 1) video.current.volume = n;
  }, [volume]);

  return (
    <>
      {volume}
      <div className="flex">
        <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("0.5")}>50</button>
        <button onClick={() => setVolume("1")}>100</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </>
  );
}

export default App;
```

```ts
// useLocalStorage.tsx
import React, { useEffect, useState } from "react";

//define the parameters and also the return beside the ":"
const useLocalStorage = (
  key: string,
  initial: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  // it's also possible to define the return using as const as below
  // return [state, setState] as const;

  return [state, setState];
};

export default useLocalStorage;
```

</details>

## 3.6 - useContext

`Define the context interface and pass it in the createContext generic` React.createContext<IUiContext | null>(null).

<details>
<summary>useLocalStorage example</summary>

```ts
// App.tsx
import React from "react";
import { UiContextProvider } from "./UiContext";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <UiContextProvider>
      <Header />
      <Content />
    </UiContextProvider>
  );
}

export default App;
```

```ts
// UiContext.tsx
import React, { PropsWithChildren, useContext, useState } from "react";

// context interface
type IUiContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

// a way to force typescript to firstly define null in the Context if necessary
// const UiContext = React.createContext<IUiContext>({} as IUiContext);

// using the generics created from the interface above
export const UiContext = React.createContext<IUiContext | null>(null);

// but this function is necessary in the way to avoid errors if the provider is not declared in the App.tsx
export const useUi = () => {
  const context = useContext(UiContext);

  if (context === null)
    throw new Error("useContext must be inside the Provider");
  return context;
};

// using PropsWithChildren to receive the children from the provider in the app.tsx and
// let them use the props
export const UiContextProvider = ({ children }: PropsWithChildren) => {
  const [dark, setDark] = useState(false);

  return (
    <UiContext.Provider value={{ dark, setDark }}>
      {children}
    </UiContext.Provider>
  );
};
```

```ts
// Header.tsx
import React, { useContext } from "react";
import { useUi } from "./UiContext";

const Header = () => {
  const { setDark } = useUi();

  return <button onClick={() => setDark((d) => !d)}>Toggle</button>;
};

export default Header;
```

```ts
// Content.tsx
import React from "react";
import { useUi } from "./UiContext";

const Content = () => {
  const { dark } = useUi();
  return (
    <>
      <h1>{dark ? "dark" : "light"}</h1>
    </>
  );
};

export default Content;
```

</details>

## 3.7 - useReducer

With TypeScript it's possible to `define Actions as a type`, making the Reducer easier to use.

<details>
<summary>useReducer example</summary>

```ts
// App.tsx
import React from 'react';
import Form from './Form';

function App() {

  return (
    <>
      <h1>Form</h1>
      <Form/>
    </>
  )
}

export default App
```

```ts
// Form.tsx
import React, { useReducer } from 'react'
import Input from './Input'

type State = {
  name: string,
  email: string
}

// type Action = {
//   type: 'setName' | 'setEmail',
//   payload: string
// }

//defining the interface as that will help to add new others reducers with different payloads
type Action =
  | { type: 'setName'; payload: string }
  | { type: 'setEmail'; payload: string }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'setName':
      return {
        ...state,
        name: action.payload
      };
    case 'setEmail':
      return {
        ...state,
        email: action.payload
      };
    default:
      return state
  }
}

const Form = () => {

  const [state, dispatch] = useReducer(reducer, { name: '', email: '' });

  return (
    <>
      <Input label={`Name: ${state.name}`} value={state.name} onChange={({ target }) => dispatch({ type: 'setName', payload: target.value })} />
      <Input label={`Email: ${state.email}`} value={state.email} onChange={({ target }) => dispatch({ type: 'setEmail', payload: target.value })} />
    </>
  )
}

export default Form
```

```ts
// Input.tsx
import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
};

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="text" {...props} />
    </div>
  );
};

export default Input;
```

</details>

