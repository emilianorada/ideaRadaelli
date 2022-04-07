import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';

import logo from './logo.svg';
import FunctionalComponent from './Components/types/Functional';
import ClassComponent from './Components/types/Class'; 



//importo los componentes creados 
import About from './layouts/about';
import Contact from './layouts/contact';
import Home from './layouts/home';
import NavBar1 from './Components/NavBar/NavBar';
import CartWidget from './Components/CartWidget/CartWidget';
import ItemCount from './Components/ItemListContainer/ItemCount';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


const titulo = "Listado de Productos:"
const stock=10;
const initial= 1;
const onAdd = (contador) =>{
  console.log('click', contador);
};




function App() {
  return (

    <div className="App fluid-container">


                {/*
                    <BrowserRouter>
                  
                        <Routes>

                <Route path='/' element={ <NavBar1 /> }  >
                    <Route index element={ <Home /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/contact' element={ <Contact /> } />

                    <Route path='*' element={ <Navigate replace to="/" /> } />
                </Route> 
                </Routes>

                </BrowserRouter>
                  */}

<NavBar1 />
  
<Landing />

<ItemCount stock={stock} initial={initial} onAdd={onAdd} />

<ItemListContainer titulo={titulo}/>
<ItemDetailContainer />            



    </div>
  );
}



export default App;
