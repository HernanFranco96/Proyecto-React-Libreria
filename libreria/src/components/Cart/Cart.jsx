import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import { addDoc, collection, getDocs, getFirestore, writeBatch, where, documentId, query } from 'firebase/firestore';
import Formulario from '../Formulario/Formulario';
import CartList from '../CartList/CartList';

const Cart = () => {
  const { cartList, vaciarCarrito, precioTotal } = useCartContext();

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

  const agregarDatos = (datos) => {
    const orden = {
      nombre: datos.nombre,
      telefono: datos.telefono,
      email: datos.email,
      verificarEmail: datos.verificarEmail
    }
    generarOrden(orden);
  }
  
  const verificarEmail = (orden) => {
    let boolean = false;
    if(orden.email.length > 0 && orden.verificarEmail.length > 0)
      orden.email === orden.verificarEmail ? boolean = true : mensajeEmailInvalido();
    return boolean;
  }

  const generarOrden = async (orden) => {
    if(verificarEmail(orden)){
      
      orden.items = cartList.map(libro => {
        return {
          legajo: libro.legajo,
          nombre: libro.titulo,
          precio: libro.precio,
          cantidad: libro.cantidad
        }
      })

      orden.precioTotal = precioTotal();

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
      <div id='carrito' className='mt-5'>
        <div className={(cartList.length !== 0) ? 'contenedor-carrito' : 'carritoVacio'}>
          {/* <div className='container-fluid d-flex justify-content-center'> */}
            <div className='row md-6 d-flex justify-content-center'>
              <CartList />
              {precioTotal() !== 0 ? <p className="precio-total">{`Precio total: $${precioTotal()}`}</p> : <p></p>}
              <button className='btn-vaciar btn btn-primary' onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
            <Formulario agregarDatos={agregarDatos}/>
          {/* </div> */}
        </div>
        <Link to={'/'} className={(cartList.length === 0) ? 'btn-volverHome' : 'carritoVacio'}>Ir al Home</Link>
      </div>
  )
}

export default Cart

