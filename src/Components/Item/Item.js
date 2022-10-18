import React from 'react';
import { Link } from "react-router-dom"
import { Button, Card } from "react-bootstrap"
import "../../styles/Tienda.css";

const  Item = ({id, name, image, description, detail, category, price, stock}) => {

    return(
        
        <Card className='item' style={{ height: '67vh' , margin: '12px' }}>
            <Card.Img style={{ height:'60%', borderStyle:'none none solid none', borderWidth:'0px 0px 1px 0px'}} variant="top" src={image} />
            <Card.Body style={{ height:'40%'}} >                
                        <div style={{ height:'54%'}}>
                                <Card.Title>{name}</Card.Title>               
                                <Card.Text>
                                    {description}
                                </Card.Text>
                        </div>         
                        <div className='centrado' style={{ height:'22%'}}> 
                                <Card.Text>                                        
                                        <span><b> Precio: $ {price}</b></span>
                                </Card.Text>  
                        </div>
                        <div className='botonCentrado' style={{height: '3%'}} >
                            <Link to={`/detail/${id}`}>
                                <Button className='centrado' variant="primary">Ver Detalles</Button>
                            </Link>
                        </div>                      
            </Card.Body>
        </Card>

    );

};


export default Item;