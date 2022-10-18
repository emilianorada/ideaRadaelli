import React,  {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import pedirDatos from '../../helpers/pedirDatos';
import {useParams} from "react-router-dom";
import "../../styles/Tienda.css";
//import { getFirestore, doc, getDocs } from 'firebase/firestore';

const ItemListContainer = () =>{

        const [productList, setProductList] = useState([]);
        const [loading, setLoading] = useState(false);
        const {categoryId} = useParams();  
        
        

        useEffect( () => {   
          pedirDatos()
            .then((response) => {
                        if(categoryId){
                          setProductList( response.filter( (prod) => prod.category===categoryId)); 
                        } else{
                          setProductList(response);
                        }
              })
                        .catch((error) =>{ console.log(error);})
                        .finally(() => {
                          setLoading(false);
                        })
            }, [categoryId]);
     

           
          return (
            <div className='container-fluid tienda'>
                     {loading 
                          ? <h1><b>Cargando productos...</b></h1> 
                          :  <div className=''> 
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
===============================================================================================================================

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


          */}
