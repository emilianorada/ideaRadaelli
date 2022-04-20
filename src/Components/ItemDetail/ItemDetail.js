import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemListContainer/ItemCount'
import { Link } from "react-router-dom"
import { Button, Card } from "react-bootstrap"  

export const ItemDetail = ({id, name, img, description, detail, precio, stock}) => {
    
    const navigate = useNavigate()      //este hook lo que retorna es una funcion que podemos utilizar para manejar la navegacion desde el router,
                    

    const handleNavigate = () => {
          navigate(-1)
    }

    return (
    
    <div>

        <h2>Detalle del producto : {name}</h2>
        <img src={img} alt={name}/>
        <h4>Stock disponible: {stock}</h4>
        <p>{description}</p>
        <h4>Precio:  ${precio}</h4>
        <ItemCount />
        
         
        <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>               
                <Card.Text>
                    Descripción:${description}
                    Precio: ${precio}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Ver Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
        <button className="btn btn-success" onClick={handleNavigate}>Volver</button>
    </div>
  )
}

export default ItemDetail