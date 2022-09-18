import React, { useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import "./styles/NavBar.css";
import "./styles/ItemListContainer.css";
import "./styles/ItemCount.css";
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contacto from './pages/contacto';
import Nosotros from './pages/nosotros';
import Tienda from './pages/tienda';



function App() {

  const stock = 10
  const [items, setItems] = useState(0)
  const sumar = () => items < stock ? setItems(items + 1) : alert('Máximo de items alcanzado.')
  const restar = () => items > 0 ? setItems(items - 1) : alert('No pueden introducirse valores negativos')



  return (
    
    <div>

      <BrowserRouter>

        <NavBar />
        <Routes>
              <Route path="/" element={ <ItemListContainer/> }/>
              <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
              <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
              <Route path="/pages/contacto" element={ <Contacto/> }/>
              <Route path="/pages/nosotros" element={ <Nosotros/> }/>
              <Route path="/pages/tienda" element={ <Tienda/> }/>
        </Routes>

                {/*  <ItemListContainer titulo='Tienda' />
                    <ItemCount stock={stock} sumar={sumar} restar={restar} items={items} />
                    <ItemDetailContainer />       */}

      </BrowserRouter>

    </div>
  );
}

export default App;
