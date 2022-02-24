import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            
            < Route path= '/contact' element={<h1>Contact</h1>} />
            < Route path= '/category/:categoryId' element={<ItemListContainer greeting="Bienvenido a GameCase"/>} />
            < Route path= '/detail/:productId' element={<ItemDetailContainer />} />
            < Route path= '/' element={<ItemListContainer greeting="Bienvenido a GameCase"/>} />
          </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;