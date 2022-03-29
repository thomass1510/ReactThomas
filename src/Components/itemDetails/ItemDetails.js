import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import './itemDetail.css'

import { useNotificationServices } from "../../services/Notification/Notification";

const ItemDetails = ({ product }) => {
    const [counter, setCounter] = useState(0);

    const { addItem } = useContext(CartContext);

    const setNotification = useNotificationServices();

    const onAdd = (count) => {
        setCounter(count);
        addItem(product, count)
        setNotification("Items Added");
    };


    return (
        <div className="container1">
            <div className="Item ItemDetail">
            <h1 className='title'>{product.name}</h1>
            <img className="imgProd" src={product.img} alt={product.name} />
            <div className="card-content">
                <p className="lorem">{product.description}</p>
                <p className='title'>{product.price} USD</p>

                {counter ? (
                    <Link to="/cart">
                        <button className="container-button">Checkout</button>
                    </Link>
                ) : (
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                )}
            </div>
            </div>
        </div>
    );
};

export default ItemDetails;