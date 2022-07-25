import React from 'react';
import { Link } from 'react-router-dom';

function InputCount() {
  return (
    <>
        <Link to='/cart'>
            <button className='btn btn-outline-primary' onClick={() => {console.log('Ir a cart')}}>
                Terminar mi compra
            </button>
        </Link>
        <Link to='/'>
            <button className='btn btn-outline-primary' onClick={() => {console.log('Ir a home')}}>
                Seguir comprando
            </button>
        </Link>
    </>
  )
}

export default InputCount