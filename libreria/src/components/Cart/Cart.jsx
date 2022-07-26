import { useCartContext } from '../../context/CartContext';

function Cart() {
  const { cartList, clear } = useCartContext()

    return (
        <>
          <div className='container-fluid d-flex flex-wrap justify-content-center'>
            { 
              cartList.map(data => 
                <div className='card m-3' key={data.legajo}>
                  <img src={`../${data.url}`} className="card-img-top" alt="img"/>
                  <h2 className="card-text">{data.titulo}</h2>
                  <p className="card-title">Precio: ${data.precio}</p>
                  <p className="card-text">Cantidad: {data.cantidad} libro/s</p>
                </div>) 
            }   
          </div>
          <button onClick={clear}>Vaciar carrito</button>
        </>
      )
}

export default Cart

