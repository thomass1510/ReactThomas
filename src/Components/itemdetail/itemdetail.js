import { products } from '../mock/products';
import Counter from "../Counter/Counter";
import './itemDetail.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product, quantity }) => {
    const [count, setCount] = useState(quantity);

    const addtoCart = (quantity) => {
    alert(`Se agregaron ${quantity} "${product.name}" al carrito!`);
    setCount(quantity);
    };
    return (
        <div className='container1'>
            <div className="Item ItemDetail">
                <h1 className='title'>{product.name}</h1>
                <img className='imgProd' src={product.img} alt={product.name} />
                <h2 className='title'>$ {product.price}</h2>
                {count ? (
        <Link to="/cart">
          <button className="item-button">Ver carrito</button>
        </Link>
      ) : (
        <Counter stock={product.stock} initial={1} addtoCart={addtoCart} />
      )}   
            </div>
            <div className='lorem'>
                <p className='text'>{product.description}</p>
            </div>
    </div>
    
    );
    
    
    }
    
    
    export default ItemDetail;