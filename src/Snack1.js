import React from 'react';
import { Link } from 'react-router-dom';
import './snacks.css';

function Snack1() {

  return (
    <div>
      <h2> Pretzels</h2>
      <img src='https://www.pngitem.com/pimgs/m/494-4944319_pretzel-png-transparent-png.png' className='App-logo' alt='a pretzel'></img>
      <Link to='/'>
        <button>Back to Vending Machine</button>
      </Link>
    </div>
  );
}

export default Snack1;