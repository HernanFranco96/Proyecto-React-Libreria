import ItemCount from "../components/ItemCount/ItemCount";

const ItemListContainer = (props) => {
    return <>
        <div className="alert alert-primary" role="alert">
            {props.saludo}
            <ItemCount stock={5} inicio={1}/>
        </div>
    </>;
};

export default ItemListContainer;