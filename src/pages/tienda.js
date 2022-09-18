import React from "react";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import { Dropdown } from "react-bootstrap"; 
import { Link } from "react-router-dom";


const Tienda = () => {
    
    return(
        <div>
            <h1>Tienda</h1>

            <Dropdown className="">
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Filtrar por
                </Dropdown.Toggle>

                <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/category/Cargadores" className="header-link">Cargadores</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/category/Equipos" className="header-link">Equipos</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/category/Periféricos" className="header-link">Periféricos</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <ItemListContainer />
        </div>
    )
}


export default Tienda