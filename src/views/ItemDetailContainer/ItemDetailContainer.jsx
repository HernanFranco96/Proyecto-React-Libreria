import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getFirestore, query, where, limit, getDocs } from 'firebase/firestore';
import Loading from "../../components/Loading/Loading";
import ItemDetailList from "../../components/ItemDetailList/ItemDetailList";

function ItemDetailContainer() {
    const [libro, agregarLibros] = useState([]);
    const [cargando, ingresarValor] = useState([true]);

    const { id } = useParams();

    const llamarFirebase = () => {
        const baseDeDatos = getFirestore();
        const coleccion = collection(baseDeDatos, 'Items');
        const libroSeleccionado = query(coleccion, where('legajo','==', Number(id)), limit(1));
        setTimeout(() => {
            getDocs(libroSeleccionado)
                .then(respuesta => agregarLibros( respuesta.docs.map(libro => ({ id: libro.id, ...libro.data() }))))
                .catch(err => console.log(err))
                .finally(() => ingresarValor(false))
        }, 1000);
    }

    useEffect(() => {
        llamarFirebase();
    }, [id]);  

    return (
    <>
        {
            cargando 
            ? 
                <Loading />
            :
                <ItemDetailList libro={libro} />
        }
    </> 
    )
}

export default ItemDetailContainer;