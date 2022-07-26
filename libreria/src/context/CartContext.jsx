import { createContext, useContext, useState } from 'react';
    
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([]);

    const clear = () =>{
        setCartList([])
    };

    const msjAgregar = (libro) => {
        console.log(`"${libro.titulo}" fue agregado al carrito.`)
    }

    const isInCart = (id) => {
        let libro = cartList.find(lib => lib.legajo === id.legajo)
        if(libro !== undefined){
            alert(`"${id.titulo}" ya esta agregado al carrito.`);
            return -1;
        }

        msjAgregar(id);
        setCartList([
            ...cartList,
            id
        ])
    };

    const addToCart = (objProducto) =>{
        if(cartList.length === 0){
            msjAgregar(objProducto);
            setCartList([
                ...cartList,
                objProducto
            ]);
        }else{
            isInCart(objProducto);
        }
    };

    return(
        <CartContext.Provider value={{
            cartList,
            clear,
            addToCart
        }}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartContextProvider