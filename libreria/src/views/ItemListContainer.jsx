import ItemCount from "../components/ItemCount/ItemCount";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = (props) => {

    return <>
        <div className="alert alert-primary" role="alert">
            {props.saludo}
            <ItemCount stock={5} inicio={1}/>
            <ItemList />
        </div>
    </>;
};

export default ItemListContainer;