import './CartWidget.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../context/CartContext";
import React, { useContext } from "react";

const CartWidget = () => {
    const { cart, getQuantityTotal } = useContext(CartContext);

    return (
        <div>
        <li className="nav-item px-5 nav-link"><AiOutlineShoppingCart className="Cart" /></li>
        {cart.length > 0 && (
        <span className='Cart'>{getQuantityTotal()}</span>
        )}
        </div>
        
    );
};

export default CartWidget