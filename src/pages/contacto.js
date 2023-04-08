import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap"; 
import DatosContacto from '../Components/DatosContacto/DatosContacto';
import FormularioContacto from '../Components/FormularioContacto/FormularioContacto';
import ValidacionFormulario from '../Components/ValidacionFormulario/ValidacionFormulario';
import "../styles/Tienda.css";
import "../styles/Contacto.css";

function Contacto () {

    const navigate = useNavigate()      //este hook lo que retorna es una funcion que podemos utilizar para manejar la navegacion desde el router,  
    const handleNavigate = () => {
         navigate(-1)
    } 

    return(

    <div className='espacioSuperior'>
    <div class="container">		
            <div class="row">                
                <h3 >Contáctenos</h3>                    
                    <FormularioContacto />
                    <DatosContacto />               
            </div>

            <Button variant="warning" size="lg" className="mt-5 p-3" onClick={handleNavigate}> Volver </Button>   

            {/*---------------------------------------------BOTON FLOTANTE WSP--------------------------------------------------------------*/}
            <a href="https://api.whatsapp.com/send?phone=5491164660788&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20%20" class="float" target="_blank">
                <i class="fa fa-whatsapp my-float"></i>
            </a>
    </div>
    </div>

        );
}

export default Contacto;