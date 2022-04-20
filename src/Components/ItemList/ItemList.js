import React from 'react'
import {Item} from "../Item/Item"

export const ItemList = ( {listaProductos} ) => {

    return (
        <div>    
            
            <div className="row d-flex justify-content-evenly">
                { listaProductos.map( (producto) => <Item key={producto.id} {...producto} /> )}
            </div> 
        </div>
    )
}
