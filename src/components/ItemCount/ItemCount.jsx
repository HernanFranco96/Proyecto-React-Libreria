import './ItemCount.css';
import { useState, useEffect } from 'react';

const ItemCount = (props) => {

    const [count, updateCount] = useState(props.initial);

    const incrementar = () => {
        (count < props.stock && count < 5) ? updateCount(count + 1) : document.getElementById('mensajeNoIncrementa').className = 'activarMensaje';
    };

    const decrementar = () => {
        (props.stock > 0) ? updateCount(count - 1) : document.getElementById('mensajeNoHayStock').className = 'activarMensaje';
    };

    const agregarCarrito = (event) => {
        if(props.stock !== 0){
            props.onAdd(count);
            event.stopPropagation();
        }else{
            document.getElementById('mensajeNoHayStock').className = 'activarMensaje';
        }
    }

    useEffect(() => {
        (count == 0) ? document.getElementById('btn').className = 'btn btn-outline-primary disabled' : document.getElementById('btn').className = 'btn btn-outline-primary';  
    });

    return <>
        <div className="carta-itemCount card mx-auto">
            <div className="card-header">
                {props.titulo}
            </div>
            <div className="card-body">
                <ul>
                    <li>
                        <a href="#" onClick={decrementar}>-</a>
                    </li>
                    <li className='cantidad'>{count}</li>
                    <li>
                        <a href="#" onClick={incrementar}>+</a>
                    </li>
                </ul>
                <button type="button" className="btn btn-outline-primary" id='btn' onClick={agregarCarrito}>Agregar al carrito</button>
                <div id='mensajeNoHayStock' className='desaparecerMensaje'>No hay Stock.</div>
                <div id='mensajeNoIncrementa' className='desaparecerMensaje'>No puede incrementar mas la cantidad.</div>
            </div>
        </div>
    </>;
};
export default ItemCount;