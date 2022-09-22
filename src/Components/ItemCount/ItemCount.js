import React, { useState } from 'react';
import "../../styles/ItemCount.css";


const ItemCount = ({setItems, items}) => {

    const stock = 10

    
    const sumar = () => items < stock ? setItems(items + 1) : alert('Máximo de items alcanzado.')
    const restar = () => items > 0 ? setItems(items - 1) : alert('No pueden introducirse valores negativos')
    

    return (
        
        <div className="itemCount">
            <div className="numberSelected">{items}</div>
            <div className="count">
                <button className="buttonQuantity" onClick={restar}>-</button>
                <button className="buttonQuantity" onClick={sumar}>+</button>
            </div>               
        <div className="detail">Stock disponible: {stock}</div>   
        </div>
    )
}

export default ItemCount
