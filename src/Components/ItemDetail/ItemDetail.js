import React, {useState} from 'react'
import { Button, Card } from "react-bootstrap"  
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, image, description, detail, price, stock}) => {
  
    const [cantidad, setCantidad] = useState(1)
  
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
                <ItemCount
                   // stock={stock} sumar={sumar} restar={restar} items={cantidad}
                />    
                <Button variant="primary">Ver Detalles</Button>
                </Card.Body>
        </Card>
    </div>
  )
}

export default ItemDetail