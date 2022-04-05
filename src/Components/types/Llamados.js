/*

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



let booleanTst = false;

const color = booleanTst ? 'red' : 'blue';

const styles = {
  
  title:{
    backgroundColor: color,
  },

  typesContainer: {
    display:'flex',
    flexDirection: 'row',
  },
};


const personaFunction = {
  nombre: 'Juan',
  apellido: 'Perez',
};


const personaClase = {
  nombre: 'Juan',
  apellido: 'Perez',
};











function App() {
  return (

    <div className="App">

        <header className="App-header">
          

            <div style={styles.typesContainer}>

                <ClassComponent     //Componente de presentacion (solo muestra data)
                  nombre={personaClase.nombre}
                  apellido={personaClase.apellido}
                  edad= "30"
                 /> 

                {/* <FunctionalComponent {...persona}/> //}
                <FunctionalComponent  //Componente de presentacion (solo muestra data)
                  nombre={personaFunction.nombre}
                  apellido={personaFunction.apellido}
                  
                >
                <img src={logo} className="App-logo" alt="logo" />  

                </FunctionalComponent>



                
            </div>
            {/* <img src={logo} className="App-logo" alto="logo" /> //}

            <p style={styles.title} >
                Edit <code>src/App.js</code> and save to reload Holaaaaaa
            </p>

            <a
              className="App-link"
              href="https://reactjs.org"
              target= "_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

       </header>     

      {/*  <Routes>

<Route path='/' element={ <NavBar1 /> }  >
    <Route index element={ <Home /> } />
    <Route path='/about' element={ <About /> } />
    <Route path='/contact' element={ <Contact /> } />

    <Route path='*' element={ <Navigate replace to="/" /> } />
</Route> 
</Routes>



<Landing />
//
}
            

    </div>
  );
}



export default App;


*/