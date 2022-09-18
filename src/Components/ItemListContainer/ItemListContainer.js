import data from '../mockData/mockData';
import React,  {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import pedirDatos from '../../helpers/pedirDatos';
import {useParams} from "react-router-dom"

const ItemListContainer = () =>{

          const [productList, setProductList] = useState([]);
          const [loading, setLoading] = useState(false)

          const {categoryId} = useParams()


          useEffect( () => {

            pedirDatos()
              .then((response) => {
                          if(categoryId){
                            setProductList( response.filter( (prod) => prod.category===categoryId)) 
                          } else{
                            setProductList(response)
                          }
                })
                          .catch((error) =>{ console.log(error)})
                          .finally(() => {
                            setLoading(false)
                          })
              }, [categoryId])      



           
          return (

            <div className='tienda'>
                     {loading 
                          ? <h2>Cargando productos...</h2> 
                          :  <div> 
                                <ItemList lista={productList} />
                            </div>
                    }  
            </div>
                )
        }


              
export default ItemListContainer;
