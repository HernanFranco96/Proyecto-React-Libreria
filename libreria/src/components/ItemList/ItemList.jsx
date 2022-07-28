import Item from '../Item/Item';
import {memo} from 'react';

const ItemList = memo(({libros}) => {
    return <>
        {libros.map((lib) => (
            <div key={lib.legajo}>
                <Item data={lib}/>
            </div>
        ))}
    </>;
});

export default ItemList;