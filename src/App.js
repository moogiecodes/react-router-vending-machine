import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';
import VendingMachine from './VendingMachine';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/snack1'>
          <Snack1 />
        </Route>
        <Route exact path='/snack2'>
          <Snack2 />
        </Route>
        <Route exact path='/snack3'>
          <Snack3 />
        </Route>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
