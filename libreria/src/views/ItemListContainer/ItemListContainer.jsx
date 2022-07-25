// import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    // const onAdd = (count) => {
    //     (count > 0 && count <= 5) ? alert('Usted selecciono un total de: ' + count) : null;
    // };

    const [libros, setLibros] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        if(categoryId){
            setTimeout(() => {
                fetch('../libros.json')
                .then((response) => response.json())
                .then((json) => setLibros(json.filter(lib => lib.categoria === categoryId)))
            }, 2000)
        } else{
            fetch('/libros.json')
                .then((response) => response.json())
                .then((json) => setLibros(json))
        }
    }, [categoryId]);

    return <>
        <div className="alert alert-primary" role="alert">
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
            <div className="container-fluid d-flex flex-wrap justify-content-center">
                <ItemList libros={libros}/>
            </div>
        </div>
    </>;
};

export default ItemListContainer;