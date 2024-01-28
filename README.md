# 3 - Hooks with TSX

## 3.1 - useState

React does a good job inferring what type you have in the useState. But `use Generics to describe the possible multiple types` that it can have.

<details>
<summary>Example using Generics</summary>

```ts
//App.tsx
import React from 'react';

function user() {
  return {
    name: 'Eduardo',
    profession: 'Developer',
  };
}

type User = {
  name: string;
  profession: string;
};

function App() {          //Generics
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
import React from 'react';
import Button from './Button';

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