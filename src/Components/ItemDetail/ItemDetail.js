import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount'

const ItemDetail = ({productDetail}) => {
    const {name, description, img } = productDetail
  return (
    <div>
        <h2>Detalle del producto : {name}</h2>
        <img src={img} alt={name}/>
        <p>{description}</p>
        <ItemCount />
    </div>
  )
}

export default ItemDetail