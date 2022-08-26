import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import "./styles/NavBar.css";
import "./styles/ItemListContainer.css"

function App() {
  return (
    
    <div>
      <NavBar />
      <ItemListContainer titulo='Tienda' />
    </div>
  );
}

export default App;
