import React, { useEffect, useState } from 'react'
import {Container} from "react-bootstrap"
import { useParams} from "react-router-dom"
import pedirDatos  from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemDetailContainer = () => {

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