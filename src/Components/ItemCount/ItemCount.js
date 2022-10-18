import React from 'react';
import "../../styles/ItemCount.css";
import swal from 'sweetalert';

const ItemCount = ({setItems, items, stock}) => {
     
    const sumar = () => items < stock ? setItems(items + 1) : swal({ icon:"error", title: "Maximo de items alcanzado", button:"Ok"}) 
    const restar = () => items > 1 ? setItems(items - 1) : swal("1 es el número mínimo")
    

    return (
        <div className="itemCount">            
            <div className="count">
                <button className="buttonQuantity" onClick={restar}>-</button>
                <div className="numberSelected">{items}</div>
                <button className="buttonQuantity" onClick={sumar}>+</button>
            </div>                
        </div>
    )
}

export default ItemCount

