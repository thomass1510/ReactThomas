import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    //función que agrega items al carrito
    const ToCart = (prod, cantidad) => {
        isInCart(prod.id)
            ? sumarCantidad(prod, cantidad)
            : setCart([...cart, { ...prod, cantidad }]);
    };

    //función que chequea si está en el carrito
    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    //función que agrega cantidad
    const sumarCantidad = (prod, cantidad) => {
        const newProducts = cart.map((products) => {
            if (products.id === prod.id) {
                const newProduct = {
                    ...products,
                    cantidad: products.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return products;
            }
        });
        setCart(newProducts);
    };


    return (
        <CartContext.Provider value={{ cart, ToCart }}>
            {children}
        </CartContext.Provider>
    );
};