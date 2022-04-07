import React from 'react'
import Item from "../Item/Item"

const ItemList = ( {listaProductos} ) => {

    return (
        <div>    
            
            <hr/>
            <div className="row d-flex justify-content-evenly">
                { listaProductos.map( (producto) => <Item  producto={producto} key={producto.id} /> )}
            </div> 
        </div>
    )
}

export default ItemList


