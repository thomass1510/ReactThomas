import {AiOutlineShoppingCart} from 'react-icons/ai';
import './CartWidget.css'
import { CartContext } from '../../context/CartContext';
import React, { useContext } from "react";


const CartWidget = () => {
    const { getQuantityTotal } = useContext(CartContext);

    return (
    <div className="Cart">
        <AiOutlineShoppingCart className='Cart'/>
        <span>{getQuantityTotal()}</span>
    </div>
    );
};

export default CartWidget;