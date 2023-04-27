import React, {useState, useContext} from 'react';
import '../../../src/App.css';
import { Button, Card } from "react-bootstrap";  
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import "../../styles/Tienda.css";


const ItemDetail = ({id, name, image, description, detail, price, stock}) => {


    const data= [id, name, image, description, detail, price, stock];
    const rutaInicial= '../images/tienda/'
    const {addToCart} = useContext(CartContext);
    const navigate = useNavigate()      //este hook lo que retorna es una funcion que podemos utilizar para manejar la navegacion desde el router,  
    const handleNavigate = () => {
         navigate(-1)
    }

    const [items, setItems] = useState(1)

    function onAdd(data){
      console.log('cantidad: ', items);
      setItems( items);
      console.log('seleccionado: ' , data)
      addToCart(data, items);
    }
  
  
    return (
        <div>
              <Card  className='col-6 cardDetail' style={{width:'100%' }} >
                <div>
                  <Card.Img  src={rutaInicial + image} alt={name} />
                </div>
                <div>
                  <Card.Body className='bodyDetail'>
                      <div className='titleCard' >
                        <Card.Title><h3> {name} </h3></Card.Title>
                      </div>                 
                        <Card.Text>
                            <div className='descriptionCard' >
                                <p>Detalle del producto: {description}</p>
                            </div>
                            <div className='stockCard' >
                              <p>Stock disponible: {stock}</p>
                            </div>
                            <div className='centrado precioCard' >
                              <h4>Precio: ${price}</h4>
                            </div>                            
                        </Card.Text>
                        <ItemCount setItems={setItems} items={items} stock={stock}/>
                        <div className="d-grid gap-2">  
                          <Button variant="warning mt-2" size="lg" onClick={() => onAdd(data)}> Agregar al carrito</Button>
                        </div>                           
                    </Card.Body>
                </div>      
              </Card>
              <br/>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>              
                  <Button variant="secondary"  className="mb-5" onClick={handleNavigate}> Volver </Button>
                  <Button variant="success"  className="mb-5 p-3 enlace"><Link to={'/cart'}>Ir al carrito</Link></Button>   
              </div>    
     </div>       
  )
}

export default ItemDetail