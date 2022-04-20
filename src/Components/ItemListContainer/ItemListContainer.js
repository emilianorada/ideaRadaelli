import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import { pedirDatos } from '../../helpers/pedirDatos'
import {ItemList} from '../ItemList/ItemList'
import { useNavigate } from 'react-router-dom'


export const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams() // useParams es el componente, que me va a devolver un objeto donde vamos a tener las keys del segmento dinamico del path
                                     //  const {categoryId} tiene que tener el mismo nombre que  /:categoryId                                                (osea de categoryId)  
 
  
    const navigate = useNavigate()      //este hook lo que retorna es una funcion que podemos utilizar para manejar la navegacion desde el router,
                    

    const handleNavigate = () => {
        navigate(-1)
        }



    useEffect( ()=> {

            setLoading(true)
            
            pedirDatos()
                  .then((res) => {
                            if(categoryId){
                              setListaProductos( res.filter( (prod) => prod.category===categoryId))
                            } else{
                              setListaProductos(res)
                            }
                    })
                  
                .catch((err) =>{
                  console.log(err)
                })
                .finally(() => {
                  setLoading(false)
                })

      }, [categoryId])      
         
          
       
  return (
    <>
    <div className='row p-3'>
  
        {loading 
          ? <h2>Cargando productos...</h2> 
          :  <div> 
            <ItemList listaProductos={listaProductos}/>
            <button className="btn btn-success" onClick={handleNavigate}>Volver</button>
            </div>
        }
        
        
    </div>
    </>
  )
}
