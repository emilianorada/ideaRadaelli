import React, { useEffect, useState } from 'react'
import {Container} from "react-bootstrap"
import { useParams} from "react-router-dom"
//import pedirDatos  from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'
import "../../styles/Tienda.css";
import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [productDetail, setproductDetail] = useState(null);  
    const {itemId} = useParams(); 

    const getProduct = () => {
            const db = getFirestore();
            const queryDoc = doc(db, 'items', itemId);
            getDoc(queryDoc)
                .then((res) => {
                  console.log('res:', res);
                  console.log(res.id);
                  console.log(res.data());
                  setproductDetail({id: res.id, ...res.data()});
                  setLoading(false);
                })
                .catch((err) => console.log(err));
        }
       

    useEffect(()=> {
        getProduct();
        }, [itemId]);
      

        
      return (
        <div className='container-fluid espacioSuperior'>
          <div className='row'>  
            <Container className='d-flex justify-content-center'>
                {
                  loading 
                  ?
                  <> 
                    <div>
                      <h2 className='p-5'>CARGANDO DETALLES...</h2>   
                    </div>
                  </>
                  : <ItemDetail {...productDetail}   />
                }       
            </Container>
          </div>
        </div>
      )
    }
    
  export default ItemDetailContainer



  {/* 
      useEffect(()=>{
        setLoading(true)
        pedirDatos()
        .then((res) => {
          const productFind = res.find((item) => item.id === (itemId));
          setproductDetail(productFind)
          console.log("productFind :" , productFind)
        })
        .then(console.log("Detalle de producto: ", productDetail))
        .catch((error) => {
              console.log(error)
            })
        .finally(() => {
              setLoading(false)
    })
}, [])
 */}








  