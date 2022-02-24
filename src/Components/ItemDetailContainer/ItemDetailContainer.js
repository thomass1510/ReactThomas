import React from 'react'
import { useEffect, useState } from 'react';
import { GetProduct } from '../mock/products';
import ItemDetail from '../itemdetail/itemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({greeting}) => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams()

    useEffect(() => {
        GetProduct(params.productId).then((res) => {
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
            <ItemDetail product = {product}/>
        </div>
        
    )
    
}
export default ItemDetailContainer