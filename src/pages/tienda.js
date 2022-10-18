import React from "react";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import { Dropdown } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import "../styles/Tienda.css";

const Tienda = () => {
    
    return(
        <>
        <div className="tienda container-fluid">
                  <div className="row">  
                        <div className="col-5">
                            <h1 className="titulo espacioSuperior">Tienda</h1>
                        </div>
                        <div className="col-5 espacioSuperior derecha">                        
                            <Dropdown className="primario">
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    Filtrar por
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/category/Cargadores" className="header-link">Cargadores</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/category/Equipos" className="header-link">Equipos</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/category/Periféricos" className="header-link">Periféricos</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                </div> 
            <ItemListContainer />
        </div>
        </>
    )
}

export default Tienda