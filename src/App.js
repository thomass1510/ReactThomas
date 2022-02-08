import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a GameCase" />
    </div>
  );
}

export default App;
