import React from 'react';
import Summary from './Pages/Summary';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import "./style.scss";

function App() {

  return (
    <>
      <Sidenav />
      <main>
        <Header />
        <Summary />
      </main>
    </>
  )
}

export default App
