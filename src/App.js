import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a GameCase" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;