import React, { useEffect, useState } from 'react'
import {Container} from "react-bootstrap"
import { useParams} from "react-router-dom"
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  const {itemId} = useParams()
  
  
        useEffect(()=>{
            setLoading(true)
            
            pedirDatos()
            .then((res) => {
                  setProductDetail(res.find((item) => item.id === Number(itemId)))
            })
                  .catch((error) => {
                    console.log(error)
                  })
            
                  .finally(() => {
                    setLoading(false)
        })
      }, [itemId])

  return (
    <Container className='row my-5'>
        {
          loading 
          ? <p className='p-3'>CARGANDO DETALLES</p> 
          :  <ItemDetail {...productDetail}  />
        }       
    </Container>
  )
}

export default ItemDetailContainer