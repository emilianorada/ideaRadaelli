import React from 'react';
import DatosContacto from '../Components/DatosContacto/DatosContacto';
import FormularioContacto from '../Components/FormularioContacto/FormularioContacto';
import ValidacionFormulario from '../Components/ValidacionFormulario/ValidacionFormulario';
import "../styles/Tienda.css";
import "../styles/Contacto.css";

function Contacto () {

    return(

    <div className='espacioSuperior'>
    <div class="container">		
            <div class="row">                
                <h3 >Contáctenos</h3>                    
                    <FormularioContacto />
                    <DatosContacto />               
            </div>

            {/*---------------------------------------------BOTON FLOTANTE WSP--------------------------------------------------------------*/}
            <a href="https://api.whatsapp.com/send?phone=5491164660788&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20%20" class="float" target="_blank">
                <i class="fa fa-whatsapp my-float"></i>
            </a>
    </div>
    </div>

        );
}

export default Contacto;