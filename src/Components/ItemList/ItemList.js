import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ lista }) => {


    return(
        <div className='tienda'>
            {lista.map((product) => (
                <div key={product.id}>
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