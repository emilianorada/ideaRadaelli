import React from 'react';
import "../../styles/ItemCount.css";


const ItemCount = ({items, stock, sumar, restar}) => {

 

    return (
        
        <div className="itemCount">
            <div className="numberSelected">{items}</div>
            <div className="count">
                <button className="buttonQuantity" onClick={restar}>-</button>
                <button className="buttonQuantity" onClick={sumar}>+</button>
            </div>
            <button className="buttonAdd" >Agregar al carrito</button>    
        <div className="detail">Stock disponible: {stock}</div>   
        </div>
    )
}

export default ItemCount
