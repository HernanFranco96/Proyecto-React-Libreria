import ItemList from "../../components/ItemList/ItemList";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Loading from "../../components/Loading/Loading";

const ItemListContainer = () => {

    const [libros, agregarLibros] = useState([]);
    const [cargando, ingresarValor] = useState([true]);

    const { categoryId } = useParams();

    const llamarFirebase = () => {
        const baseDeDatos = getFirestore();
        const coleccion = collection(baseDeDatos, 'Items');
        const consultarColeccion = categoryId ? query(coleccion, where('categoria','==',categoryId)) : coleccion;
        setTimeout(() => {
            getDocs(consultarColeccion)
                .then(respuesta => agregarLibros({ id: respuesta.docs.map(libro => ({ id: libro.id, ...libro.data() }))}))
                .catch(err => console.log(err))
                .finally(() => ingresarValor(false))
        }, 1000);
    }

    useEffect(() => {
        llamarFirebase();
    }, [categoryId]);

    return <>
        <div className="container-fluid d-flex flex-wrap justify-content-center">
            { 
                cargando ?
                    <Loading />
                :
                    <ItemList libros={libros}/>
            }
        </div>
    </>;
};

export default ItemListContainer;