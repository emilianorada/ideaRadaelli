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
              <Card  className='col-6 item' style={{width:'100%', height: '94vh'  }} >
                <div>
                  <Card.Img  src={image}  style={{ height:'43vh'}} />
                </div>
                <div>
                  <Card.Body style={{ height:'43vh'}}>
                      <div style={{ height:'8vh'}}>
                        <Card.Title><h3> {name} </h3></Card.Title>
                      </div>                 
                        <Card.Text>
                            <div style={{ height:'7%'}}>
                                <p>Detalle del producto: {description}</p>
                            </div>
                            <div style={{ height:'7%'}}>
                              <p>Stock disponible: {stock}</p>
                            </div>
                            <div className='centrado' style={{ height:'7%'}}>
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