import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getFirestore, query, where, limit, getDocs } from 'firebase/firestore';

function ItemDetailContainer() {
    const [libro, agregarLibros] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const baseDeDatos = getFirestore();
        const coleccion = collection(baseDeDatos, 'Items');
        const libroSeleccionado = query(coleccion, where('legajo','==', Number(id)), limit(1));
        setTimeout(() => {
            getDocs(libroSeleccionado)
                .then(respuesta => agregarLibros( respuesta.docs.map(libro => ({ id: libro.id, ...libro.data() }))))
                .catch(err => console.log(err))
        }, 2000);
    }, [id]);  

    return (
        libro.map((lib) => (
            <div key={lib.id}>
                <ItemDetail data={lib}/>
            </div>
        ))
    )
}

export default ItemDetailContainer;