import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import { addDoc, collection, getDocs, getFirestore, writeBatch, where, documentId, query } from 'firebase/firestore';

const Cart = () => {
  const { cartList, vaciarCarrito, precioTotal, removeItem } = useCartContext();

  const mensajeEmailInvalido = () => {
    let carrito = document.getElementById('carrito');
    let p = document.createElement('p');
    p.innerHTML = `
      <div class="alert alert-danger" role="alert">
        Su email no es valido.
      </div>`;
    carrito.appendChild(p);
  }

  const mensajeId = (orden) => {
    let carrito = document.getElementById('carrito');
    let p = document.createElement('p');
    p.innerHTML = `
      <div class="alert alert-success" role="alert">
        Orden generada: ${orden}
      </div>`;
    carrito.appendChild(p);
  }

  const verificarEmail = (email) => {
    if(email === 'false') 
      mensajeEmailInvalido();
    else
      return true;
  }

  const generarOrden = async () => {
    const orden = {};
    orden.comprador = {
      nombre: document.getElementById('nombre').value,
      telefono: document.getElementById('telefono').value,
      email: (document.getElementById('email').value === document.getElementById('validarEmail').value) ? document.getElementById('email').value : 'false'
    };

    if(verificarEmail(orden.comprador.email)){
      orden.items = cartList.map(libro => {
        return {
          legajo: libro.legajo,
          nombre: libro.titulo,
          precio: libro.precio
        }
      });
  
      orden.total = precioTotal();

      // GENERAMOS ORDEN
      const db = getFirestore();
      const ordenes = collection(db, 'ordenes');

      addDoc(ordenes, orden)
        .then(respuesta => mensajeId(respuesta.id))
        .catch(error => console.log(error))

      // ACTUALIZAMOS PRODUCTO
      const coleccionStock = collection(db, 'Items');
      const actualizarColeccion = query(
        coleccionStock,
        where( documentId(), 'in', cartList.map(libro => libro.id))
      )

      const batch = writeBatch(db);

      await getDocs(actualizarColeccion)
        .then(respuesta => respuesta.docs.forEach(respuesta => batch.update(respuesta.ref, {
          stock: respuesta.data().stock - cartList.find(libro => libro.id === respuesta.id).cantidad
        })))
        .catch(error => console.log(error))
        .finally(() => vaciarCarrito())

      batch.commit();
    }   
  }

  return (
    <>
      <div id='carrito'>
        <div className={(cartList.length !== 0) ? 'contenedor-carrito' : 'carritoVacio'}>
          <div className='container-fluid d-flex justify-content-center'>
            <div className='row md-6 d-flex justify-content-center'>
              {
                cartList.map(data =>
                  <div className='carta-carrito card' key={data.legajo}>
                    <img src={`../${data.url}`} className="card-img-top" alt="img" />
                    <h2 className="card-text">{data.titulo}</h2>
                    <p className="card-title">Precio: ${data.precio} c/u</p>
                    <p className="card-text">Cantidad: {data.cantidad}</p>
                    <button type="button" className="btn-eliminar btn btn-danger" onClick={() => removeItem(data)}>Eliminar</button>
                  </div>
                )
              }
              {precioTotal() !== 0 ? <p className="precio-total">{`Precio total: $${precioTotal()}`}</p> : <p></p>}
              <button className='btn-vaciar btn btn-primary' onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
            <form className='row md-6 d-flex flex-column flex-wrap-wrap'>
              <div className="col-md-12">
                {/* <label for="nombre" className="form-label">Nombre</label> */}
                <input type="text" className="form-control" id='nombre' />
              </div>
              <div className="col-md-12">
                {/* <label for="telefono" className="form-label">Telefono</label> */}
                <input type="text" className="form-control" id='telefono' />
              </div>
              <div className="col-md-12">
                {/* <label for="email" className="form-label">Email</label> */}
                <input type="email" className="form-control" id='email' />
              </div>
              <div className="col-md-12">
                {/* <label for="validarEmail" className="form-label">Validar Email</label> */}
                <input type="email" className="form-control" id='validarEmail' />
              </div>
              <div className="col-12 mt-5">
                <button type="button" className="btn btn-primary" onClick={() => generarOrden()}>Generar orden</button>
              </div>
            </form>
          </div>
        </div>
        <Link to={'/'} className={(cartList.length === 0) ? 'btn-volverHome' : 'carritoVacio'}>Ir al Home</Link>
      </div>
    </>
  )
}

export default Cart

