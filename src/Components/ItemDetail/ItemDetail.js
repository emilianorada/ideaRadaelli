import React, {useState} from 'react'
import { Button, Card } from "react-bootstrap"  
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, name, image, description, detail, price, stock}) => {
  

    const navigate = useNavigate()      //este hook lo que retorna es una funcion que podemos utilizar para manejar la navegacion desde el router,
                    
    const handleNavigate = () => {
         navigate(-1)
    }

    const [items, setItems] = useState(0)

    const handleClick = () => {
              console.log('cantidad: ', items);
    };
  
    return (
    <div>          
          <Card >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>               
                <Card.Text>
                    <h4>Detalle del producto:{description}</h4>
                    <h2>Precio: ${price}</h2>
                    <h4>Stock: {stock}</h4>
                </Card.Text>
                <ItemCount setItems={setItems} items={items} />    
                </Card.Body>
                <Link to={'/cart'}  onClick={handleClick} className="buttonAdd" >Agregar al carrito</Link> 
        </Card>
        <button className="btn btn-success" onClick={handleNavigate}>Volver</button>
    </div>
  )
}

export default ItemDetail