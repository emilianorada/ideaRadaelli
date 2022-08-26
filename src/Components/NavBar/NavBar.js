import React from "react"
import icono from '../../images/ghostnetisotipo.png'

function NavBar ()  {
    return (

      <nav className="nav">

        <div  className="brand">        
          <img src={icono} alt="icono"  />        
          <a href="/"> Ghosnet</a>    
        </div>

        <div className="nav-links">
          <ul >            
              <li> <a className="nav-item" href="../index.js"> Inicio </a> </li>
              
              <li> <a className="nav-item" href="../pages/nosotros.js"> Nosotros </a> </li>
              
              <li> <a className="nav-item" href="../pages/contacto.js"> Contacto </a> </li>
              
              <li> <a className="nav-item" href="../pages/tienda"> Tienda </a> </li>
          </ul>
        </div>

      </nav>

)}


export default NavBar;    