import  React, { useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({children}) => {

        const [cart, setCart] = useState([]);

        const addToCart = (item, cantidad) => {
                if(isInCart(item.id)) {
                    alert('Ya esta en el carrito');
                }else {
                    setCart([...cart, {...item, cantidad}]);
                }                
        };

        const isInCart = (id) => {
            return cart.some((item) => item.id===id);
        };

        const removeItem = (id) => {
            setCart( cart.filter((prod) => prod.id !== id) )
          }    
        
        const clear = () => {
            setCart([]);
        };

        return(
            <CartContext.Provider value={{cart, addToCart}}>
                {children}
            </CartContext.Provider>
        );
};