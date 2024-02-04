import React from 'react';
import Summary from './Pages/Summary';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import "./style.scss";
import { DataContextProvider } from './Context/DataContext';

function App() {

  return (
    <DataContextProvider>
      <Sidenav />
      <main>
        <Header />
        <Summary />
      </main>
    </DataContextProvider>
  )
}

export default App
