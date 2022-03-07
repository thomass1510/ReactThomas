import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css"

const Cart = () => {
    const { cart, removeItem, getTotalPrice, removeQuantity } = useContext(CartContext);

    return (
        <>
            {cart.map((prods) => (
                <li key={prods.id}>
                <h1 className='title'>{prods.name}</h1>
                <img className='imgProd' src={prods.img} alt={prods.name} />
                <h2 className='title'>$ {prods.price}</h2>
                <h3>{prods.cantidad}</h3>
                <button onClick={() => removeQuantity(prods)}>
                Remove Quantity
              </button>
              <button onClick={() => removeItem(prods)}>Remove</button>
                </li>
            ))}
            {cart.length > 0 && (
                <p className="getTotalPrice">Total price: {getTotalPrice()} USD</p>
              )}
        </>
    );
};

export default Cart;