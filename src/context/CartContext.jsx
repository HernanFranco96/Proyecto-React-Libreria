import { createContext, useContext, useState } from 'react';
    
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([]);

    const precioTotal = () => {
        let acumulador = 0;
        cartList.forEach(lib => {
            acumulador += (lib.precio * lib.cantidad);
        });
        return acumulador;
    }

    const contadorCarrito = () => {
        let contador = 0;
        cartList.forEach(lib => {
            contador += lib.cantidad;
        });
        return contador;
    }

    const removeItem = (id) => {
        let index = cartList.findIndex(product => product === id);
        if(index !== -1){
            cartList.splice(index,1);
            setCartList([
                ...cartList
            ]);
        }
    }

    const vaciarCarrito = () =>{
        setCartList([])
    };

    const isInCart = (id) => {
        let libro = cartList.find(lib => lib.legajo === id.legajo)
        if(libro !== undefined){
            let index = cartList.indexOf(libro);
            cartList[index].cantidad += id.cantidad;
            return -1;
        }

        setCartList([
            ...cartList,
            id
        ])
    };

    const addToCart = (objProducto) =>{
        if(cartList.length === 0){
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
            vaciarCarrito,
            addToCart,
            precioTotal,
            contadorCarrito,
            removeItem
        }}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartContextProvider