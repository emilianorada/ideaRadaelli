import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div>
        <h1>Carrito</h1>
        {cart.length === 0 ? (
          <>
          <h2> No hay productos en el Carrito</h2>
          <Link to={'/'} >Volver </Link>
          </>
        ) : (
         <>     
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.image} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeItem(item.id)}> Remover  </button>
              <Link to={'/'} >Volver </Link>
            </div>  
          ))}
          </>
          )}
      </div>
  
    );
  };

        
        

export default Cart