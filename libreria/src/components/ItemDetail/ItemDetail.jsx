import './ItemDetail.css'

const ItemDetail = ({data}) => {
    console.log(data);
    return <>
        <div className="card">
            <div className="card-body">
                <img src={`../${data.url}`} className="card-img-top" alt="img"/>
                <h2 className="card-title">{data.titulo}</h2>
                <p className="card-text">{data.autor}</p>
                <p className="card-text">${data.precio}</p>
                <p className="card-text descripcion">{data.descripcion}</p>
                <p className="card-text">Stock: {data.stock}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    </>
}

export default ItemDetail;