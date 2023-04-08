import React from "react";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import { Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Tienda.css";

const Tienda = () => {

    const navigate = useNavigate()      //este hook lo que retorna es una funcion que podemos utilizar para manejar la navegacion desde el router,  
    const handleNavigate = () => {
         navigate(-1)
    } 
    
    return(
        <>
        <div className="tienda container-fluid">
                  <div className="row espacioSuperior">  
                            <div className=" col-sm-12 col-md-5 col-lg-5">
                                <h1 className="titulo ">Tienda</h1>
                            </div>
                            <div className=" col-sm-12 col-md-5 col-lg-5 ms-auto">                        
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
            <Button variant="warning" size="lg" className="mt-4 ms-5 p-3" onClick={handleNavigate}> Volver </Button> 
        </div>
        </>
    )
}

export default Tienda