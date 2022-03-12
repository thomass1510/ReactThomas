import React from 'react'
import { useEffect, useState } from 'react';
//import { GetProduct } from '../mock/products';
import ItemDetail from '../itemdetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {productId} = useParams()
    console.log(productId)

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {
            const product = {id: response.productId, ...response.data() };
            setProduct(product);
            }).finally(() => {
            setLoading(false);
            });
    }, [productId]);

    return(
        <div>
            <h2>GameCase</h2>
            <ItemDetail product = {product}/>
        </div>
        
    )
    
}
export default ItemDetailContainer