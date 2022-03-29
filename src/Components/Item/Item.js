import React from "react";
import { Link } from "react-router-dom";


export default function Item({ product }) {
    return (
        <div className="Item">
            <p className="title">{product.name}</p>
            <img className ="imgProd" src={product.img} alt={product.name} />
            <div>
                <p>{product.price} USD</p>

                <Link to={`/item/${product.id}`}>
                    <button className="botonDetail">BUY</button>
                </Link>
            </div>
        </div>
    );
}