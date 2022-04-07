import React from 'react'
import { Button, Card } from "react-bootstrap"
import ItemCount from '../ItemListContainer/ItemCount'

const Item = ( {producto} ) => {


    return (
        {/*
        <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>               
                <Card.Text>
                    Precio: ${producto.precio}
                </Card.Text>
                <Link to={`/detail/${producto.id}`}>
                    <Button variant="primary">Ver Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    */},
   
    <div className="card" style={{width:'18rem'}}>
    <img src={producto.img} className="card-img-top" alt={producto.name}/>
    <div className="card-body">
        <h3 className="card-text">{producto.name}</h3>
        <p className="card-text">{producto.description}</p>
        <ItemCount />
    </div>
</div>


    )

}


export default Item