import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContext } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContext>
      <BrowserRouter>
        <NavBar />
          <Routes>
            
            < Route path= '/contact' element={<h1>Contact</h1>} />
            <Route path="/" element={<ItemListContainer />} />
              <Route path="/products/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            < Route path= '/' element={<ItemListContainer greeting="Bienvenido a GameCase"/>} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
          
      </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;