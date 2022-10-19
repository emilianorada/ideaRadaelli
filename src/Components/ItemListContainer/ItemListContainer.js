import React,  {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import pedirDatos from '../../helpers/pedirDatos';
import {useParams} from "react-router-dom";
import "../../styles/Tienda.css";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () =>{

        const [productList, setProductList] = useState([]);
        const [loading, setLoading] = useState(true);
        const {categoryId} = useParams();  
        
        const getProducts = () => {
              const db= getFirestore();
              const querySnapshot = collection(db, 'items');
              if(categoryId){
                const queryFilter = query(querySnapshot, where("category", "==", categoryId))
                getDocs(queryFilter)
                    .then((response) => {
                      const data= response.docs.map((product) => {
                          console.log(product.data());
                          return {id: product.id, ...product.data()};
                      });
                      setProductList(data);
                    });
              }else{
                getDocs(querySnapshot)
                    .then((response) => {
                      const data= response.docs.map((doc) =>{
                        return {id: doc.id, ...doc.data()};
                    }) 
                      console.log('data: ', data)
                      setProductList(data);
                      setLoading(false)
                  })
                  .catch((err) => console.log(err));
              };
        }


        useEffect( () => {
          getProducts()          
        }, [categoryId])

          return (
            <div className='container-fluid tienda '>
                     {loading 
                          ? <h1 className='centrado'><b>Cargando productos...</b></h1> 
                          :  <div className=''> 
                                <ItemList lista={productList} />
                            </div>
                    } 
            </div>
                )
        }
       
export default ItemListContainer;



    {/* 
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

            useEffect( () => {
              getProducts()
              setLoading(false);
            }, [categoryId])

     */}








