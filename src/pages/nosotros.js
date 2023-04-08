import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap"; 
import "../styles/Tienda.css";
import "../styles/Nosotros.css";

function Nosotros () {

    const navigate = useNavigate()      //este hook lo que retorna es una funcion que podemos utilizar para manejar la navegacion desde el router,  
    const handleNavigate = () => {
         navigate(-1)
    } 

    return(
    <div className='espacioSuperior'>     

        <div class="container"> 
                <div class="row" >
                    <div class="col-lg-6">
                        <h2>Sobre nosotros</h2>
                        <br/>
                        <p class="lh-lg">Ghostnet Telecomunicaciones, nace de la necesidad identificada de proveer soluciones en conexión de fibra óptica a diferentes localidades de la República Argentina, las cuales carecen de alcance por parte de la competencia. Con la finalidad de mejorar la calidad de vida de todos sus usuarios mediante un esquema profesional y tecnología de vanguardia que permita la conexión ininterrumpida en el servicio de internet y derivados.<br/>
                            Un equipo conformado por profesionales en el área tecnológica, garantizan el perfecto funcionamiento de toda la plataforma de la marca.
                        </p>	
                    </div>
                    
                    <div class="col-lg-6 " >
                        <img src="../images/logo2.png" height="100%vh" width="100%" />
                    </div>

                    <hr class="h_hr" /> 	
                </div>

        		<div class="row">		
                    <div class="col-lg-5 fnos">
                        <img class="recuadro" src="../images/antena1.jpg" width="100%" />
                    </div>
                    <div class="col-lg-1">				
                    </div>
                    <div class="col-lg-5">
                        <img class="recuadro" src="../images/fusionadora.jpg" width="100%" />
                    </div>
		        </div>
                <Button variant="warning" size="lg" className="mt-5 p-3" onClick={handleNavigate}> Volver </Button> 
	    </div>
    </div>
        );
}


export default Nosotros;