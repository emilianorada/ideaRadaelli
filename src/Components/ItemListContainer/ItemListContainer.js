import data from '../mockData/mockData';
import {React, useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () =>{

          const [productList, setProductList] = useState([]);


          useEffect( () => {

            getProducts
                .then((response) =>{
                      setProductList(response);
                })
                .catch((error) => console.log(error));
          
              }, []);      


          const getProducts = new Promise ((resolve) => {
                setTimeout(() => {
                  resolve(data);
                }, 2000);

                });

          
         return (
                  <div className='contenedor'>
                      <ItemList lista={productList} />
                  </div>
                )
              }

              
export default ItemListContainer;