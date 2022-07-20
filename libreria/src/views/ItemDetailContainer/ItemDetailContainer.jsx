import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [libro, setLibros] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch('../src/libros.json')
            .then((response) => response.json())
            .then((json) => setLibros(json))
        }, 2000)
    }, []);  
    
    return (
        <div className="container-fluid">
            {libro.map((lib) => {
                if(lib.legajo == id){
                    <div key={lib.legajo}>
                        <ItemDetail data={lib}/>
                        {console.log(lib)}
                    </div>
                }
            })}
        </div>
    )
}

export default ItemDetailContainer;