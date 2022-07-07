import './ItemCount.css';
import { useState, useEffect } from 'react';

const ItemCount = (props) => {

    const [count, updateCount] = useState(props.inicio);

    const incrementar = () => {
        (count < props.stock) ? updateCount(count + 1) : alert('No puede adquirir mas productos.');
    };

    const decrementar = () => {
        (count > 0) ? updateCount(count - 1) : alert('No hay stock');
    };

    const onAdd = () => {
        (count > 0 && count <= 5) ? alert('Usted selecciono un total de: ' + count) : null;
    };

    useEffect(() => {
        (count == 0) ? document.getElementById('btn').className = 'btn btn-outline-primary disabled' : document.getElementById('btn').className = 'btn btn-outline-primary';  
    });

    return <>
        <div className="carta card mx-auto">
            <div className="card-header">
                Titulo
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
                <button type="button" className="btn btn-outline-primary" id='btn' onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    </>;
};
export default ItemCount;