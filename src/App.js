import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            
            < Route path= '/contact' element={<h1>Contact</h1>} />
            < Route path= '/category/:categoryId' element={<ItemListContainer greeting="Bienvenido a GameCase"/>} />
            < Route path= '/detail/:productId' element={<ItemDetailContainer />} />
            < Route path= '/' element={<ItemListContainer greeting="Bienvenido a GameCase"/>} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
          
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;