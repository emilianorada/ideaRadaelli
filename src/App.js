import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importo los componentes creados 
import About from './layouts/about';
import Contact from './layouts/contact';
import Home from './layouts/home';
import NavBar1 from './Components/NavBar';




function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <NavBar1 /> }  >
                <Route index element={ <Home /> } />
                <Route path='about' element={ <About /> } />
                <Route path='contact' element={ <Contact /> } />

                <Route path='*' element={ <Navigate replace to="/" /> } />
            </Route>
          </Routes>
        
        </BrowserRouter>
    </div>
  );
}



export default App;
