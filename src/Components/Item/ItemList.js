import React from "react";
import Item from "../Item/Item";
import './Itemlist.css'

export default function ItemList({ products }) {
    return (
        <div className="itemlist">
        {products.map((product) => (
            <Item key={product.id} product={product} />
        ))}
        </div>
    );
}