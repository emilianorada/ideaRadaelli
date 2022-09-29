import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import "./styles/NavBar.css";
import "./styles/ItemListContainer.css";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contacto from './pages/contacto';
import Nosotros from './pages/nosotros';
import Tienda from './pages/tienda';
import { CartProvider } from './Context/CartProvider';
import Cart from './Components/Cart/Cart'; 


function App() {


  return (
    
    <div>
        <CartProvider>
            <BrowserRouter>

              <NavBar />
              <Routes>
                    <Route path="/" element={ <ItemListContainer/> }/>
                    <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
                    <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
                    <Route path="/contacto" element={ <Contacto/> }/>
                    <Route path="/nosotros" element={ <Nosotros/> }/>
                    <Route path="/tienda" element={ <Tienda/> }/>
                    <Route path="/cart" element={ <Cart/> }/>
              </Routes>

                      {/*  <ItemListContainer titulo='Tienda' />
                          <ItemCount stock={stock} sumar={sumar} restar={restar} items={items} />
                          <ItemDetailContainer />       */}

            </BrowserRouter>
         </CartProvider>                   
    </div>
  );
}

export default App;
