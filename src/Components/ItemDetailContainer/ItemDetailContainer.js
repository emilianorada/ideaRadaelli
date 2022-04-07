import React, { useEffect, useState } from 'react'
import { getProducts } from '../../FakeApi'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
const [productDetail, setProductDetail] = useState({})
const [CargaDetalles, setCargaDetalles] = useState(false)

        useEffect(()=>{
            setCargaDetalles(true)
            getProducts
            .then((res) => setProductDetail(res.find((item) => item.id === '05')))
            .catch((error) => console.log(error))
            .finally(() => setCargaDetalles(false))
        }, [])
  return (
    <div className='row'>
        {CargaDetalles ? <p className='p-3'>CARGANDO DETALLES</p> :  <ItemDetail productDetail={productDetail}/>}
       
    </div>
  )
}

export default ItemDetailContainer