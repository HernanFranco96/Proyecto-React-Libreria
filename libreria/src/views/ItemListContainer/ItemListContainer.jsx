import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
    const onAdd = (count) => {
        (count > 0 && count <= 5) ? alert('Usted selecciono un total de: ' + count) : null;
    };

    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch('./src/libros.json')
            .then((response) => response.json())
            .then((json) => setLibros(json))
    }, []);

    return <>
        <div className="alert alert-primary" role="alert">
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <div className="container-fluid">
                <ItemList libros={libros}/>
            </div>
        </div>
    </>;
};

export default ItemListContainer;