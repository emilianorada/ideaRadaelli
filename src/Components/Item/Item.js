import React from 'react';
import { Link } from "react-router-dom"
import { Button, Card } from "react-bootstrap"


const  Item = ({id, name, image, description, detail, category, price, stock}) => {


    return(

        <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>               
                <Card.Text>
                    Descripción:{description}
                    Precio: ${price}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Ver Detalles</Button>
                </Link>
            </Card.Body>
        </Card>

    );

};



export default Item;