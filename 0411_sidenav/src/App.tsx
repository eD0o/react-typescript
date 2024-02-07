import React from 'react';
import Summary from './Pages/Summary';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import "./style.scss";
import { DataContextProvider } from './Context/DataContext';
import Sales from './Pages/Sales';

function App() {

  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Summary />
          <Sales/>
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
