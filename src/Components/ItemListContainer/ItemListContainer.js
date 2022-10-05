import data from '../mockData/mockData';
import React,  {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import pedirDatos from '../../helpers/pedirDatos';
import {useParams} from "react-router-dom"
import { getFirestore, doc, getDocs } from 'firebase/firestore';

const ItemListContainer = () =>{

          const [productList, setProductList] = useState([]);

          const {categoryId} = useParams()


        const getProducts = () => {
            const db = getFirestore();
            const querySnapshot = collection (db, 'items');
            getDocs(querySnapshot)
                .then((response) => {
                    const data = response.docs.map((doc) => {
                      console.log(doc.data());
                      return { id: doc.id, ...doc.data() };
                      });
                      setProductList(data);
                    })
                      .catch((err) => console.log(err));
                };

    
          useEffect(() =>{
            getProducts();
          }, [categoryId]);      




           
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
































        {/*

          const [loading, setLoading] = useState(false)



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
          */}
