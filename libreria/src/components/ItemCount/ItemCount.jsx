import './ItemCount.css';
import { useState, useEffect } from 'react';

const ItemCount = (props) => {

    const [count, updateCount] = useState(props.initial);

    const incrementar = () => {
        (count < props.stock) ? updateCount(count + 1) : alert('No puede adquirir mas productos.');
    };

    const decrementar = () => {
        (count > 0) ? updateCount(count - 1) : alert('No hay stock');
    };

    const agregarCarrito = (event) => {
        props.onAdd(count);
        event.stopPropagation();
    }

    useEffect(() => {
        (count == 0) ? document.getElementById('btn').className = 'btn btn-outline-primary disabled' : document.getElementById('btn').className = 'btn btn-outline-primary';  
    });

    return <>
        <div className="carta card mx-auto">
            <div className="card-header">
                {props.titulo}
            </div>
            <div className="card-body">
                <ul>
                    <li>
                        <a href="#" onClick={decrementar}>-</a>
                    </li>
                    <li>{count}</li>
                    <li>
                        <a href="#" onClick={incrementar}>+</a>
                    </li>
                </ul>
                <button type="button" className="btn btn-outline-primary" id='btn' onClick={agregarCarrito}>Agregar al carrito</button>
            </div>
        </div>
    </>;
};
export default ItemCount;