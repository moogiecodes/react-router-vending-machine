import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {

  return (
    <div>
      <h1>~WELCOME TO DA VENDING MACHINE~</h1>
      <Link to='/snack1'>
        <h2>
          Pretzels
        </h2>
      </Link>
      <Link to='/snack2'>
        <h2>
          XX Hot Cheetos
        </h2>
      </Link>
      <Link to='/snack3'>
        <h2>Thin Mints</h2>
      </Link>
    </div>
  );
}

export default VendingMachine;