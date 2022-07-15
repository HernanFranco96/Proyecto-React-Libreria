import Item from '../Item/Item';

const ItemList = ({libros}) => {
    return <>
        {libros.map((lib) => (
            <div key={lib.legajo}>
                <Item data={lib}/>
            </div>
        ))}
    </>;
};

export default ItemList;