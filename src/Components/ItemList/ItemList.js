import React from 'react';
import Item from '../Item/Item';
import "../../styles/Tienda.css";

const ItemList = ({ lista }) => {


    return(
        <div className='row d-flex justify-content-evenly'>
            {lista.map((product) => (
                <div key={product.id} className="col-sm-7 col-md-5 col-lg-4 col-xl-3 col-xxl-3 align-items-xl-start" > 
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