import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cart.css"

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.map((prods) => (
                <li key={prods.id}>
                <h1 className='title'>{prods.name}</h1>
                <img className='imgProd' src={prods.img} alt={prods.name} />
                <h2 className='title'>$ {prods.price}</h2>
                <h3>{prods.cantidad}</h3>
                </li>
                
            ))}
        </>
    );
};

export default Cart;