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