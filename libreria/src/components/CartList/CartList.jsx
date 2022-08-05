import { useCartContext } from '../../context/CartContext';

const CartList = () => {
    const { cartList, removeItem } = useCartContext();

    return (
        <>
            {cartList.map(data =>
                <div className='carta-carrito card' key={data.legajo}>
                    <img src={`../${data.url}`} className="card-img-top" alt="img" />
                    <h2 className="card-text">{data.titulo}</h2>
                    <p className="card-title">Precio: ${data.precio} c/u</p>
                    <p className="card-text">Cantidad: {data.cantidad}</p>
                    <button type="button" className="btn-eliminar btn btn-danger" onClick={() => removeItem(data)}>Eliminar</button>
                </div>
            )}
        </>
    )
}

export default CartList;