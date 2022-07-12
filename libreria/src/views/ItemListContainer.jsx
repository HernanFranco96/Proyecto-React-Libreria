import ItemCount from "../components/ItemCount/ItemCount";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = (props) => {
    const onAdd = (count) => {
        (count > 0 && count <= 5) ? alert('Usted selecciono un total de: ' + count) : null;
    };

    return <>
        <div className="alert alert-primary" role="alert">
            {props.saludo}
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <ItemList />
        </div>
    </>;
};

export default ItemListContainer;