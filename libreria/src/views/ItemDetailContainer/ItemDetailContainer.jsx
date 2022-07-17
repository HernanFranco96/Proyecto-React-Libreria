import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';

function ItemDetailContainer() {
    const [libro, setLibros] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('./src/libro.json')
            .then((response) => response.json())
            .then((json) => setLibros(json))
        }, 2000)
    }, []);  

    return (
        <div className="container-fluid">
            <div key={libro.legajo}>
                <ItemDetail data={libro}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;