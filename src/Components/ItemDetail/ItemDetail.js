import React, {useState} from 'react'
import { Button, Card } from "react-bootstrap"  
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({id, name, image, description, detail, price, stock}) => {
  

  const navigate = useNavigate()      //este hook lo que retorna es una funcion que podemos utilizar para manejar la navegacion desde el router,
                    

  const handleNavigate = () => {
        navigate(-1)
  }

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
                </Card.Body>
        </Card>
        <button className="btn btn-success" onClick={handleNavigate}>Volver</button>
    </div>
  )
}

export default ItemDetail