import { createContext, useContext, useState } from 'react';
    
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([]);

    const clear = () =>{
        setCartList([])
    };

    const message = (libro, valor) => {
        valor === 1 ? alert(`Se agregaron ${libro.cantidad} libros de "${libro.titulo}" al carrito.`) : alert(`Se acumularon ${libro.cantidad} libros mas de "${libro.titulo}" al carrito.`)
    }

    const isInCart = (id) => {
        let libro = cartList.find(lib => lib.legajo === id.legajo)
        if(libro !== undefined){
            let index = cartList.indexOf(libro);
            cartList[index].cantidad += id.cantidad;
            message(id, 0);
            return -1;
        }

        message(id, 1);
        setCartList([
            ...cartList,
            id
        ])
    };

    const addToCart = (objProducto) =>{
        if(cartList.length === 0){
            message(objProducto, 1);
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