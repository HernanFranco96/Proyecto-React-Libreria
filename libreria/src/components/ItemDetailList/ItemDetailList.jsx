import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailList = ({libro}) => {
  return (
    <>
        {
            libro.map((lib) => (
                <div key={lib.id}>
                    <ItemDetail data={lib}/>
                </div>
            ))
        }
    </>

  )
}

export default ItemDetailList;