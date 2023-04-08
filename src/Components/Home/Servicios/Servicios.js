import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Imagen1 from "../../../images/rss_feed.svg";
import Imagen2 from "../../../images/build_black.svg";
import Imagen3 from "../../../images/supervisor_account.svg";
import Imagen4 from "../../../images/router_black.svg";


const Servicios = ( {handleClick} ) => {

   

  return (

            <div className="row cont_servicios">{/*--PRIMERA SECCION DE 4 ELEMENTOS--*/}

                    <div className="col-sm-12 col-md-6 col-xl-3 iten" id="serv_1">
                            <div className="anim" >
                                <img src={Imagen1} className="img_serv" alt="Bootstrap" id="serv_11" />
                            </div>
                            <h2 >Internet</h2>
                            <p className="serv">Proveemos Internet+WiFi por fibra óptica. Conocé todos nuestros planes</p>

                            <Button  onClick={handleClick} variant="dark" id="fibra4" className="mb-5 p-2 enlace"> Ver planes </Button> 
                            <br />
                    </div>

                    <div className="col-sm-12 col-md-6 col-xl-3 iten" id="serv_2">
                        <div className="anim">
                        <img src={Imagen2} className="img_serv" alt="Bootstrap" id="serv_22" />
                        </div>  
                        <h2 className="servicio"> Servicio Técnico</h2>
                        <p>Formateos, hardware, impresoras, backup y recuperación de archivos</p>
                        <Button variant="dark" id="fibra4" className="mb-5 p-2 enlace"><Link to={'/contacto'}>Solicitar</Link></Button> 
                    </div>

                    <div className="col-sm-12 col-md-6 col-xl-3 iten" id="serv_3"> 
                        <div className="anim">
                        <img src={Imagen3} className="img_serv" alt="Bootstrap" id="serv_33" />
                        </div>  
                        <h2 className="servicio">Asesoramiento</h2>
                        <p>Sobre protecciones eléctricas, redes de comunicaciones y mucho más</p>
                        <Button variant="dark" id="fibra4" className="mb-5 p-2 enlace"><Link to={'/contacto'}>Contáctanos</Link></Button> 
                    </div>

                    <div className="col-sm-12 col-md-6 col-xl-3 iten" id="serv_4">
                        <div className="anim">
                        <img src={Imagen4} className="img_serv" alt="Bootstrap" id="serv_44" />
                        </div>  
                        <h2 className="servicio">Insumos</h2>
                        <p>Proveemos routers, antenas,toners y tecnologías renovables</p>
                        <Button variant="dark" id="fibra4" className="mb-5 p-2 enlace"><Link to={'/tienda'}>Ver más </Link></Button> 
                    </div>

                    <hr className="h_hr" />

        </div>
  )
}

export default Servicios