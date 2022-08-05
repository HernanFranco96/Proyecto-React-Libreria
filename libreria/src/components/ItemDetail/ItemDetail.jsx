import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useState } from 'react';
import InputCount from '../InputCount/InputCount';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({data}) => {

    const [state, setState] = useState(0);

    const { addToCart } = useCartContext();

    const onAdd = (count) => {
        (count > 0 && count <= 5) ? setState(count) : null;
        addToCart({...data, cantidad: count})
    };

    return <>
        <div className="card">
            {
                state === 0 ?
                    <ItemCount stock={data.stock} initial={1} onAdd={onAdd} titulo={data.titulo}/>
                :
                    <InputCount/>
            }
            <div className="card-body">
                <img src={`../${data.url}`} className="card-img-top" alt="img"/>
                <h2 className="card-title">{data.titulo}</h2>
                <p className="card-text">{data.autor}</p>
                <p className="card-text">${data.precio}</p>
                <p className="card-text descripcion">{data.descripcion}</p>
                <p className="card-text">Stock: {data.stock}</p>
            </div>
        </div>
    </>
}

export default ItemDetail;