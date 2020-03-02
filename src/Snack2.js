import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Snack2() {
  const [positionsArray, setPositionsArray] = useState([]);

  function makePosition(){
    const x = Math.random()*100;
    const y = Math.random()*100;
    setPositionsArray([...positionsArray, {x, y}]);
  }

  return (
    <div>
      <h1>XX Hot Cheetos</h1>
      {
        positionsArray.map((position) => {

          const styleObject = {
            position: "fixed",
            left: `${position.x}%`,
            top: `${position.y}%`
          }

          return <img src='https://www.cheetos.com/sites/cheetos.com/files/styles/product_thumbnail/public/2019-03/XXXtra%20Flamin%20Hot%20Crunchy_v2.png?itok=KdBZz32r'
            className='App-logo'
            alt='xx hot cheetos' style={styleObject} />
        }
        )
      }
      <button onClick={makePosition}> Add a bag!</button>
      <Link to='/'>
        <button>Back to Vending Machine</button>
      </Link>
    </div>
  );
}

export default Snack2;