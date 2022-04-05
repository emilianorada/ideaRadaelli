import React, { useState, useEffect } from 'react';
//import logo from '../../logo.svg';

//useEffect lo vamos a utilizar entre el render y posterior a inicializar los estados


const FunctionalComponent= ({ nombre, apellido, children}) => {
    //Seria lo mismo poner: const FunctionalCOmponent= ({props})  =>{
    // y en el return :   <h2>{props.nombre}    



    const [initialValue, setInitialValue] = useState('blue');
    //initialValue se puede llamar de cualquier forma

    return (
            <div style={{backgroundColor: initialValue}}>
                <h3>Functional Component</h3>
                <h2>{nombre}</h2>
                <h2>{apellido}</h2>
                {children}
                <br />
                <button onClick={()=> setInitialValue('red')}>
                    Cambiar a color rojo
                </button>
                {/* <img src={logo} className= "App-logo" alt="logo" />  */}
            </div>
        );
};



export default FunctionalComponent;