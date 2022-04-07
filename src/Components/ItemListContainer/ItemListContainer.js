import React,{useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../FakeApi'

const ItemListContainer = ({titulo}) => {

    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false)

   

// console.log(getProducts)

  useEffect(()=>{
      setCargando(true)
      getProducts
      .then((res) => setListaProductos(res))
      .catch((error) => console.log(error))
      .finally(()=> setCargando(false))
  }, [])

  return (
    <div className='row p-3'>
        <h1>{titulo}</h1>
        {cargando ? <h2>Cargando productos...</h2> : <ItemList listaProductos={listaProductos}/>}
        
        
    </div>
  )
}

export default ItemListContainer