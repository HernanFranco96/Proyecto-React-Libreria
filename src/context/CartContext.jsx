import { createContext, useContext, useState } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([]);
    const [contador, ingresarNumero] = useState(0);

    const precioTotal = () => {
        let acumulador = 0;
        cartList.forEach(lib => {
            acumulador += (lib.precio * lib.cantidad);
        });
        return acumulador;
    }

    const removeItem = (id) => {
        let index = cartList.findIndex(product => product === id);
        if(index !== -1){
            let libro = cartList.splice(index,1);
            libro.forEach(lib => {ingresarNumero(contador - lib.cantidad); })
            setCartList([
                ...cartList
            ]);
        }
    }

    const vaciarCarrito = () =>{
        setCartList([])
    };

    const isInCart = (libro) => {
        let indice = cartList.find(lib => lib.legajo === libro.legajo)
        if(indice !== undefined){
            let index = cartList.indexOf(indice);
            cartList[index].cantidad += libro.cantidad;
            ingresarNumero(contador + libro.cantidad);
            return -1;
        }
        setCartList([
            ...cartList,
            libro
        ])
        ingresarNumero(contador + libro.cantidad);
    };

    const addToCart = (libro) =>{
        if(cartList.length === 0){
            setCartList([
                ...cartList,
                libro
            ]);
            ingresarNumero(libro.cantidad);
        }else{
            isInCart(libro);
        }
    };

    return(
        <CartContext.Provider value={{
            cartList,
            vaciarCarrito,
            addToCart,
            precioTotal,
            contador,
            removeItem
        }}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartContextProvider