import Item from '../Item/Item';
import { useState, useEffect } from 'react';

const ItemList = () => {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch('./src/libros.json')
            .then((response) => response.json())
            .then((json) => setLibros(json))
    }, []);

    return <>
        <div className="container-fluid">
            {libros.map((libro) => (
                <div key={libro.legajo}>
                    <Item data={libro}/>
                </div>
            ))}
        </div>
    </>;
};

export default ItemList;