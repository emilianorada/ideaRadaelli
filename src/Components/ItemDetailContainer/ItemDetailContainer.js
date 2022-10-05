import React, { useEffect, useState } from 'react'
import {Container} from "react-bootstrap"
import { useParams} from "react-router-dom"
import pedirDatos  from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {


  const  { id } = useParams();
  const [product, setProduct]= useState();

  const db = getFirestore();

  const queryDoc = doc(db, 'items', id );  

  getDoc(queryDoc)
        .then((res)=>{               
          console.log(res.id);       
          console.log(res.data());     
          })
          .catch((err) => console.log(err));
          
    console.log(data);
    
    const getProduct = () =>{
              const queryDoc = doc(db, 'items', id);

              getDoc(queryDoc)
                .then((res) =>{
                  setProduct(res.data())
                })
                .catch((err) => console.log(err));
    };


      useEffect(()=> {
        getProduct();
      }, [id]);


      return (
        <div className='container'>
        <div className='row'>  
        <Container className='d-flex justify-content-center'>
            {
              loading 
              ? <p className='p-3'>CARGANDO DETALLES</p> 
              :  <ItemDetail {...productDetail}   />
            }       
        </Container>
        </div>
        </div>
      )
    }
    
    export default ItemDetailContainer



























    {/*                                                     
//queryDoc va a obtener un documento, lo hace utilizando el doc, qeu es una funcion que me provee firebase
// y luego a esta funcion le voy a mandar, qeu es lo que quier qeu me traiga.
// desde mi base de datos(db) quiero que me traiga la coleccion(items) y el procuto con el id __
    const [productDetail, setproductDetail] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams() 

    useEffect(()=>{
        setLoading(true)
        pedirDatos()

        .then((res) => {
          const productFind = res.find((item) => item.id === (itemId));
          setproductDetail(productFind)
          console.log("productFind :" , productFind)
        })

        .then(console.log(productDetail))
        
        .catch((error) => {
              console.log(error)
            })
        
        .finally(() => {
              setLoading(false)
    })
  }, [])

*/}
  