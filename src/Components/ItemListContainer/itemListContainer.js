import React from 'react';
import { useEffect, useState } from 'react';
//import {getProducts } from '../mock/products';
import ItemList from '../Item/ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemListContainer = ({greeting})=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();
    

    useEffect(() =>{


        const collectionRef = categoryId ?
        query(collection(db, 'products'), where('category', '==', categoryId)):
        collection(db, 'products')
        


        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                console.log(doc)
                return{id : doc.id, ...doc.data() }
            })
            console.log(products)
            setProducts(products)
        }).finally(()=>{
            setLoading(false)
        })

        return (()=>{

            setProducts()
        })
    }, [categoryId])
    
    return (
        <>
        <h1>{greeting}</h1>
        {
                loading ? 
                    <h1>Cargando...</h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No se encontraron productos!</h1>
            }
            
        </>
    );
    
};

export default ItemListContainer;

