import React from 'react';
import Summary from './Pages/Summary';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import "./style.scss";
import { DataContextProvider } from './Context/DataContext';
import Sales from './Pages/Sales';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sale from './Pages/Sale';

function App() {

  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path='/' element={<Summary />}/>
              <Route path='/sales' element={<Sales />}/>
              <Route path='/sales/:id' element={<Sale />}/>
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
