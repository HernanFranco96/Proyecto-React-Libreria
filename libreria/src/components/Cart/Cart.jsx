import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () =>{
  const { cartList, clear, precioTotal, removeItem } = useCartContext();

  return (
    <>
      <div className='container-fluid d-flex justify-content-center'>
        <div className={ (cartList.length !== 0) ? 'contenedor-carrito' : 'carritoVacio' }>
          { 
            cartList.map(data => 
              <div className='carta-carrito card' key={data.legajo}>
                <img src={`../${data.url}`} className="card-img-top" alt="img"/>
                <h2 className="card-text">{data.titulo}</h2>
                <p className="card-title">Precio: ${data.precio}</p>
                <p className="card-text">Cantidad: {data.cantidad}</p>
                <button type="button" className="btn-eliminar btn btn-danger" onClick={() => removeItem(data)}>Eliminar</button>
              </div>
            )
          }   
          {precioTotal() !== 0 ? <p className="precio-total">{`Precio total: $${precioTotal()}`}</p> : <p></p>}
          <button className='btn-vaciar btn btn-primary' onClick={clear}>Vaciar carrito</button>
        </div>
        <Link to={'/'} className={ (cartList.length === 0) ? 'btn-volverHome' : 'carritoVacio'}>Ir al Home</Link>
      </div>
    </>
  )
}

export default Cart

