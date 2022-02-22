import React from 'react'
import { useEffect, useState } from 'react';
import { GetProduct } from '../mock/products';
import ItemDetail from '../itemdetail/itemdetail';

const ItemDetailContainer = ({greeting}) => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetProduct
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return(
        <div>
            <h2>{greeting}</h2>
            <ItemDetail products = {product}/>
        </div>
        
    )
    
}
export default ItemDetailContainer