import React from 'react'
import { Link } from "react-router-dom"
import { Button, Card } from "react-bootstrap"
import ItemCount from '../ItemListContainer/ItemCount'

export const Item = ( {id, name, img, description, detail, precio, stock} ) => {



    return (
        
        <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>               
                <Card.Text>
                    Descripción:{description}
                    Precio: ${precio}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Ver Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    
   






    )

}


export default Item