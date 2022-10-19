import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import "../../styles/Tienda.css";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { getFirestore, collection, doc, addDoc, updateDoc} from 'firebase/firestore';


const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  console.log('console log de cart: ', cart)
  const rutaInicial = '../images/tienda/'
  const navigate = useNavigate()      //este hook lo que retorna es una funcion que podemos utilizar para manejar la navegacion desde el router,                  
  const handleNavigate = () => {
         navigate(-1)
    }
  const currency = function(number){
      return new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARG', minimumFractionDigits: 2}).format(number);
  };
  let subtotal=0;
  let total =  0;

  const createOrder = () => {
          



  }



  return (
    <div className='container col-md-12 espacioSuperior' style={{minHeight:'85vh'}}>
        <h1 className='text-center mb-4'>Carrito</h1>
        {cart.length === 0 ? (
          <>
              <h2 > No hay productos en el Carrito!</h2>
              <div className='izquierda' style={{marginBottom:'10vh'}}>           
                  <button className='btn btn-secondary' onClick={handleNavigate}> Volver </button>
              </div>
          </>

        ) : (

          <>         
           <Table striped bordered hover>
                  <thead>
                      <tr>
                          <th></th>
                          <th>#</th>
                          <th>Producto</th>
                          <th>Cantidad</th>
                          <th>Precio Unitario</th>
                          <th>Subtotal</th>
                      </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr>
                        <td><button className='btn btn-danger p-3' onClick={() => removeItem(item[0])}><b>
                                                                          <svg xmlns="http://www.w3.org/2000/svg"  height="35" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                                                          </svg></b>
                            </button>
                        </td>
                        <td><img src={rutaInicial + item[2]} style={{maxWidth:80}} /></td>
                        <td><h3>{item[1]}</h3></td>
                        <td><p>{item.cantidad},00</p></td>
                        <td>${item[5]}</td>
                        <td>${subtotal = parseFloat(item[5]) * item.cantidad}</td>
                      </tr>
                      ))}
                    <tr>                          
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td align='right'>Total</td>
                        <td><b>${total= currency(subtotal)}</b></td>
                    </tr>
                  </tbody>
          </Table>
          <div className='container col-md-12 '>
            <div className= 'row justify-space-between'>              
              <button  className='btn btn-outline-danger col-md-3' onClick={() => clear()}> Vaciar carrrito </button>  
              <button className='btn btn-dark col-md-4  ms-auto'>Finalizar compra</button> 
            </div>
            <div className='row'>
                  <button style={{position: 'fixed', bottom: '5vh'}} className='btn btn-secondary col-md-1 mt-5' onClick={handleNavigate}>          
                              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>  Volver </button>
            </div>           
          </div>
         </>
         )}       
    </div> 
            
)}
        
          
  

export default Cart



