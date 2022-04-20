import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';

import logo from './logo.svg';
import FunctionalComponent from './Components/types/Functional';
import ClassComponent from './Components/types/Class'; 



//importo los componentes creados 
import {NavBar1} from './Components/NavBar/NavBar';
import CartWidget from './Components/CartWidget/CartWidget';
import ItemCount from './Components/ItemListContainer/ItemCount';
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Contact from "./Components/Contact/contact";
import Nosotros from "./Components/Nosotros/Nosotros";
import Tienda from "./Components/Tienda/Tienda";

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

                    <Route path='*' element={ <Navigate replace to="/" /> } />    // * = cualquier otro elemento 
                </Route> 
                </Routes>

                </BrowserRouter>
                  */}
{/*
<NavBar1 />
  
<Landing />

<ItemCount stock={stock} initial={initial} onAdd={onAdd} />

<ItemListContainer titulo={titulo}/>
<ItemDetailContainer />   
                */}



<BrowserRouter>

<NavBar1/>

<Routes>
  <Route path="/" element={ <ItemListContainer/> }/>
  <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
  <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
  <Route path="/contacto" element={ <Contact/> }/>
  <Route path="/nosotros" element={ <Nosotros/> }/>
  <Route path="/tienda" element={ <Tienda/> }/>

  <Route path="*" element={ <Navigate to="/"/> }/>
</Routes>

{/* Footer */}

</BrowserRouter>


    </div>
  );
}



export default App;
