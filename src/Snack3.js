import React from 'react';
import { Link } from 'react-router-dom';

function Snack3() {

  return (
    <div>
      <h1>Thin Mints</h1>
      <img src='https://www.al.com/resizer/pF4VWrGHRAG6gcS9And9Xya6k0o=/450x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/wire/photo/sized-cookies-thinmintspng-c6683021a1d7017d.png' className='App-logo' alt='thin mint with girl scout sash'></img>
      <Link to='/'>
        <button>Back to Vending Machine</button>
      </Link>
    </div>
  );
}

export default Snack3;