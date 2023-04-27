import React, {useRef} from 'react';
import "../styles/Home.css";
import "../styles/Tienda.css";
import Carousel from '../Components/Home/Carousel/Carousel';
import Servicios from '../Components/Home/Servicios/Servicios';
import Planes from '../Components/Home/Planes/Planes';


const Home = () => {
 
  const ref= useRef(null);

  const handleClick = () => { 
  /*
    if(ref ) {
      ref.current?.scrollIntoView({ behaviour: 'smooth'});
    }    
*/
};
  

  return (
    <div className='espacioSup'>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
          <Carousel />
          <div className="container marketing text-center ">{/*--CONTENEDOR GLOBAL--*/}
            <Servicios handleClick={handleClick} />
    {/*---------------------------------------------BOTON FLOTANTE WSP-------------------------------------------------------------*/}
   
          <div className="container text-start"> {/*--SEGUNDA SECCION, QUE CONTIENE 2 ARTICULOS--*/}    

            <Planes ref={ref} />

              <div className="conteiner">
                        <div className="row">
                          <h4 className="text-center"><u>¿Donde estamos?</u></h4>
                          <br />
                          <br /> 
                        </div>
              </div>

          </div>

        <hr className="h_hr" />
        

          {/*---------------------------------------------BOTON FLOTANTE WSP-------------------------------------------------------------*/}
          <a href="https://api.whatsapp.com/send?phone=5491164660788&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20%20" className="float" target="_blank">
              <i className="fa fa-whatsapp my-float"></i>
          </a>{/*-------------------------------------------------------------------------------------------------------------------------*/}

    </div>


    </div>
  )
}

export default Home