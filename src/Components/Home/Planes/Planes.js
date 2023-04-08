import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"; 


const Planes = ({ ref }) => {
  
  return (
    <article >
    <h2 className="text-center" ref={ref}><a >PLANES DISPONIBLES:</a></h2>
    <br />
    <br />
    {/*-------------------------------------------1ER ARTICULO---------------------------------------------------------------------*/}
    <h4 className="text-center p-4" id="fibraoptica"><u>FIBRA OPTICA </u></h4>

    <div className="row " id="fibra">{/*--FILA DE 4 ELEMENTOS--*/}
            <div className="col-sm-12 col-md-6 col-xl-3 iten text-center" >
              <div className="anim">
                <img src="images/10Mfibra.jpg" className="rounded-circle" width="140" height="140" /> 
              </div>  
              <br />
              <br />
              <p>Downstream hasta 15 Megas<br />Upstream hasta 8 Megas<br />Sin Limites de descarga<br />Incluye Wi-Fi</p>
              <div className="anim3">
                <Button variant="dark" id="fibra1" className="mb-5 p-2 enlace"><Link to={'/contacto'}>Contratar</Link></Button>   
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-xl-3 iten text-center">
              <div className="anim">
                <img src="images/15Mfibra.jpg" className="rounded-circle" width="140" height="140" />
              </div>   
              <br />
              <br />
              <p>Downstream hasta 15 Megas<br />Upstream hasta 8 Megas<br />Sin Limites de descarga<br />Incluye Wi-Fi</p>
              <div className="anim3">
                <Button variant="dark" id="fibra2" className="mb-5 p-2 enlace"><Link to={'/contacto'}>Contratar</Link></Button>
              </div>  
            </div>

            <div className="col-sm-12 col-md-6 col-xl-3 iten text-center">
              <div className="anim">
                <img src="images/20Mfibra.jpg" className="rounded-circle" width="140" height="140" />
              </div>   
              <br />
              <br />
              <p>Downstream hasta 15 Megas<br />Upstream hasta 8 Megas<br />Sin Limites de descarga<br />Incluye Wi-Fi</p>
              <div className="anim3"> 
                <Button variant="dark" id="fibra3" className="mb-5 p-2 enlace"><Link to={'/contacto'}>Contratar</Link></Button> 
              </div>  
            </div>


            <div className="col-sm-12 col-md-6 col-xl-3 iten text-center">
              <div className="anim">
                <img src="images/30Mfibra.jpg" className="rounded-circle" width="140" height="140" />
              </div>   
              <br />
              <br />
              <p>Downstream hasta 15 Megas<br />Upstream hasta 8 Megas<br />Sin Limites de descarga<br />Incluye Wi-Fi</p>
              <div className="anim3">
              <Button variant="dark" id="fibra4" className="mb-5 p-2 enlace"><Link to={'/contacto'}>Contratar</Link></Button> 
              </div>  
            </div>
    </div>{/*</article>--TERMINA FILA --*/}

    <hr className="h_hr" />

    {/*--------------------------------------------2DO ARTICULO--------------------------------------------------------------------*/}
    <h4 className="text-center p-4" id="radioenlace"><u>RADIO ENLACE</u></h4>

    <div className="row" id="renlace">{/*--FILA DE 4 ELEMENTOS--*/}
            <div className="col-sm-12 col-md-6 col-xl-3 iten text-center">
              <div className="anim">
                <img src="images/10Mfibra.jpg" className="rounded-circle" width="140" height="140" />
              </div>   
              <br />
              <br />
              <p>Downstream hasta 15 Megas<br />Upstream hasta 8 Megas<br />Sin Limites de descarga<br />Incluye Wi-Fi</p>
              <div className="anim3"> 
                <p><a className="btn btn-dark" id="renlace1" href="sections/contacto.html">Ver más</a></p>
              </div>  
            </div>

            <div className="col-sm-12 col-md-6 col-xl-3 iten text-center">
              <div className="anim">
                <img src="images/15Mfibra.jpg" className="rounded-circle" width="140" height="140" />
              </div>  
              <br />
              <br />
              <p>Downstream hasta 15 Megas<br />Upstream hasta 8 Megas<br />Sin Limites de descarga<br />Incluye Wi-Fi</p>
              <div className="anim3"> 
                <p><a className="btn btn-dark" id="renlace2" href="sections/contacto.html">Ver más</a></p>
              </div>  
            </div>

            <div className="col-sm-12 col-md-6 col-xl-3 iten text-center">
              <div className="anim">
                <img src="images/20Mfibra.jpg" className="rounded-circle" width="140" height="140" />
              </div>  
              <br />
              <br />
              <p>Downstream hasta 15 Megas<br />Upstream hasta 8 Megas<br />Sin Limites de descarga<br />Incluye Wi-Fi</p>
              <div className="anim3"> 
                <p><a className="btn btn-dark" id="renlace3" href="sections/contacto.html">Ver más</a></p>
              </div>  
            </div>


            <div className="col-sm-12 col-md-6 col-xl-3 iten text-center">
              <div className="anim">
                <img src="images/30Mfibra.jpg" className="rounded-circle" width="140" height="140" />
              </div>  
              <br />
              <br />
              <p>Downstream hasta 15 Megas<br />Upstream hasta 8 Megas<br />Sin Limites de descarga<br />Incluye Wi-Fi</p>
              <div className="anim3"> 
                <p><a className="btn btn-dark" id="renlace4" href="sections/contacto.html">Ver más</a></p>
              </div>  
            </div>
    </div>{/*--TERMINA FILA --*/}

    <hr className="h_hr" />  

    

</article>       
  )
}

export default Planes