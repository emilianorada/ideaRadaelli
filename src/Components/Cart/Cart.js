import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc} from 'firebase/firestore';



const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  console.log('cart: ', cart)
  
  const db = getFirestore();
  
  const createOrder = () => {
    const order= {
      buyer:{
        name: 'Juan',
        phone: '123456789',
        email: 'test@test.com',
      },
      items: cart,
      total: cart.reduce(
        (valorPasado, valorActual) =>
        valorPasado + valorActual.price * valorActual.quantity,
        0
      ),
      date: moment().format(),
    };
    const query = collection(db, 'orders');
    addDoc(query, order)
      .then(({id}) =>{
        console.log(id);
        alert('Felicidades por su compra');
      })
      .catch(() =>
      alert('La compra no pudo ser completada')
      );
       
  };


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
          <div>
            <button onClick={createOrder}> Crear orden</button>
          </div>
      </div>
  
    );
  };

        
        

export default Cart