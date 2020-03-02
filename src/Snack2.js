import React from 'react';
import { Link } from 'react-router-dom';

function Snack2() {

  return (
    <div>
      <h1>XX Hot Cheetos</h1>
      <img src='https://www.cheetos.com/sites/cheetos.com/files/styles/product_thumbnail/public/2019-03/XXXtra%20Flamin%20Hot%20Crunchy_v2.png?itok=KdBZz32r' className='App-logo' alt='xx hot cheetos'></img>
      <Link to='/'>
        <button>Back to Vending Machine</button>
      </Link>
    </div>
  );
}

export default Snack2;