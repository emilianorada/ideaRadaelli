import React, { useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import "./styles/NavBar.css";
import "./styles/ItemListContainer.css";
//import "./styles/ItemCount.css";
//import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contacto from './pages/contacto';
import Nosotros from './pages/nosotros';
import Tienda from './pages/tienda';



function App() {

  


  return (
    
    <div>

      <BrowserRouter>

        <NavBar />
        <Routes>
              <Route path="/" element={ <ItemListContainer/> }/>
              <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
              <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
              <Route path="/contacto" element={ <Contacto/> }/>
              <Route path="/nosotros" element={ <Nosotros/> }/>
              <Route path="/tienda" element={ <Tienda/> }/>
        </Routes>

                {/*  <ItemListContainer titulo='Tienda' />
                    <ItemCount stock={stock} sumar={sumar} restar={restar} items={items} />
                    <ItemDetailContainer />       */}

      </BrowserRouter>

    </div>
  );
}

export default App;
