import React, { useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import "./styles/NavBar.css";
import "./styles/ItemListContainer.css";
import "./styles/ItemCount.css";
import ItemCount from './Components/ItemCount/ItemCount';



function App() {

  const stock = 10
  const [items, setItems] = useState(0)
  const sumar = () => items < stock ? setItems(items + 1) : alert('Máximo de items alcanzado.')
  const restar = () => items > 0 ? setItems(items - 1) : alert('No pueden introducirse valores negativos')



  return (
    
    <div>
      <NavBar />
      <ItemListContainer titulo='Tienda' />
      <ItemCount stock={stock} sumar={sumar} restar={restar} items={items} />
    </div>
  );
}

export default App;
