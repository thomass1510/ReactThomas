import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';
import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a GameCase" />
      <Counter stock={8} initial= {0} />
    </div>
  );
}

export default App;
