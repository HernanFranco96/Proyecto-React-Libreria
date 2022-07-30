// import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [libros, agregarLibros] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const baseDeDatos = getFirestore();
        const coleccion = collection(baseDeDatos, 'Items');
        if(categoryId){
            setTimeout(() => {
                const coleccionFiltrada = query(coleccion, where('categoria','==',categoryId))
                getDocs(coleccionFiltrada)
                    .then(respuesta => agregarLibros({ id: respuesta.docs.map(libro => ({ id: libro.id, ...libro.data() }))}))
                    .catch(err => console.log(err))
            }, 2000);
        }else{
            getDocs(coleccion)
            .then(respuesta => agregarLibros({ id: respuesta.docs.map(libro => ({ id: libro.id, ...libro.data() }))}))
            .catch(err => console.log(err))
        } 
    }, [categoryId]);

    console.log(libros);

    return <>
        <div className="alert alert-primary" role="alert">
            <div className="container-fluid d-flex flex-wrap justify-content-center">
                { 
                    libros.length !== 0 ? 
                        <ItemList libros={libros}/>
                    :
                        ''
                }
            </div>
        </div>
    </>;
};

export default ItemListContainer;