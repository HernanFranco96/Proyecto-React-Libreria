import './InputCount.css'
import { Link } from 'react-router-dom';

function InputCount() {
  return (
    <>
        <div className='input-count'>
            <Link to='/cart'>
                <button className='btn btn-outline-primary'>
                    Terminar mi compra
                </button>
            </Link>
            <Link to='/'>
                <button className='btn btn-outline-primary'>
                    Seguir comprando
                </button>
            </Link>
        </div>
    </>
  )
}

export default InputCount