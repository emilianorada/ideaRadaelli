import React, {useState} from 'react';

const FunctionalComponent = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const clickSumar = () => {
        if (contador === stock){
        return;
    }
    setContador(contador+1);
    };


    const clickResta = () => {
        if(contador=== initial){
            return;
        }
        setContador(contador-1);
    };


    const addToCart = () =>{
        onAdd(contador);
    };

    return(
        <div style={{backgroundColor: "orange", paddingTop:"20px",}}>
            <div>
                 <h3>Unidades:</h3>
                 <h1>{contador}</h1>   
            </div>
            <div style={{padding: "20px",}}>
                <button className='botonAgregar' onClick={() => clickResta()}>-1</button>
                <button className='botonAgregar' onClick={() => clickSumar()}>+1</button>
            </div>
            <div  style={{paddingBottom: "20px", }}>
                <button className='botonAgregar' style={{backgroundColor:"#071C2C", color:"white",}} onClick={()=> addToCart()}>Agregar al carrito</button>
            </div>
        </div>

    );

};








export default FunctionalComponent