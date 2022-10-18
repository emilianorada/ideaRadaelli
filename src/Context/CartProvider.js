import  React, { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import swal from 'sweetalert';


export const CartProvider = ({ children }) => {

    
        const [cart, setCart] = useState([]);

        const addToCart = (item, cantidad) => {
                console.log('item (cartprovider)', item);
                if(isInCart(item[0])) {
                    swal('Este producto ya fue agregado al carrito');
                }else {
                    setCart([...cart, {...item, cantidad: cantidad}]);
                    swal({
                        icon: "success",
                        title:"Producto agregado!",
                        button: "Ok"
                      });
                }                
        };

        const isInCart = (id) => {
            return cart.some((item) => item[0]===id);
        };

        const removeItem = (id) => {
            setCart( cart.filter((prod) => prod[0] !== id) )
          }    
        
        const clear = () => {
            setCart([]);
        };

        return(
            <CartContext.Provider value= {{ cart , addToCart, removeItem, clear }}>
                {children}
            </CartContext.Provider>
        );
};


