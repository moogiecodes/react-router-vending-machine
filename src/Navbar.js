import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (
    <nav className='navClass'>
      <span>Spesho Vending Machine</span>
      <NavLink exact to='/snack1'>
        Pretzels
      </NavLink>
      <NavLink exact to='/snack2'>
        XX Hot Cheetos
      </NavLink>
      <NavLink exact to='/snack3'>
        Thin Mints
      </NavLink>
    </nav>
  );
}

export default Navbar;