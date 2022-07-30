import Item from '../Item/Item';
import {memo} from 'react';

const ItemList = memo(({libros}) => {
    return <>    
        {libros.id.map((lib) => (
            <div key={lib.id}>
                <Item data={lib}/>
            </div>
        ))}
    </>;
});

export default ItemList;