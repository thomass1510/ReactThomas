import React from 'react';
import { useEffect, useState } from 'react';
import {getProducts } from '../mock/products';
import ItemList from '../Item/ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting})=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();
    
    useEffect(()=>{
        getProducts(categoryId)
        .then((res)=>{
            setProducts(res);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [categoryId]);
    
    return (
        <>
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <h1>{greeting}</h1>
                    <ItemList products={products} />
                </>
            )}
        </>
    );
};

export default ItemListContainer;

