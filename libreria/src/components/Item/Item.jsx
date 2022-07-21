import './item.css';
import { Link } from 'react-router-dom';

const Item = ({data}) => {
    return <>
        <div className="card">
            <img src={`../${data.url}`} className="card-img-top" alt="img"/>
            <div className="card-body">
                <h2 className="card-title">{data.titulo}</h2>
                <p className="card-text">{data.autor}</p>
                <p className="card-text">${data.precio}</p>
                <p className="card-text">Stock: {data.stock}</p>
                <Link className="btn btn-primary" to={`/item/${data.legajo}`}>Mas</Link>
            </div>
        </div>
    </>;
}

export default Item;