import React from 'react';
import Item from '../Item/Item';
import "../../styles/Tienda.css";

const ItemList = ({ lista }) => {


    return(
        <div className='row'>
            {lista.map((product) => (
                <div key={product.id} className="col-3 fila" >
                    <Item 
                        id= {product.id}
                        name={product.name}
                        image= {product.image}
                        description={product.description}
                        detail= {product.detail}
                        category= {product.category}
                        price={product.price}                      
                        stock={product.stock}
                    />
                </div>
            ))}
        </div>
    );
};


export default ItemList;