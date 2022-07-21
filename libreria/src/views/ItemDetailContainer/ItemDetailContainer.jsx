import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [libro, setLibros] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch('../libros.json')
                .then((response) => response.json())
                .then((json) => setLibros(json.filter(lib => lib.legajo === Number(id))))
        }, 2000)
    }, [id]);  
    
    return (
        libro.map((lib) => (
            <div key={lib.legajo}>
                <ItemDetail data={lib}/>
            </div>
        ))
    )
}

export default ItemDetailContainer;