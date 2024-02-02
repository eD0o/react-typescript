import React from 'react';
import Header from './Header';
import Content from './Content';
import { UserContextProvider } from './UserContext';

function App() {

  return (
    <UserContextProvider>
      <Header />
      <Content />
    </UserContextProvider>
  )
}

export default App
