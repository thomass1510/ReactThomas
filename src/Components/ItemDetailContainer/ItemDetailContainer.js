import React from 'react'
import { useEffect, useState } from 'react';
import { GetProduct } from '../mock/products';
import ItemDetail from '../itemdetail/itemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';


const ItemDetailContainer = ({}) => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', params)

        getDoc(docRef).then( response =>{
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        }).finally(()=>{
            setLoading(false)
        })



    }, [params]);

    return(
        <div>
            <h2>Hola</h2>
            <ItemDetail product = {product}/>
        </div>
        
    )
    
}
export default ItemDetailContainer