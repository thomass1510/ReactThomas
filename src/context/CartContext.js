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
    const removeItem = (products) => {
        let newCart = cart.filter((p) => p.id !== products.id);
        setCart(newCart);
      };
    
      const clear = () => {
        setCart([]);
      };
    
      const removeQuantity = (products) => {
        let newCart = cart.map((p) => {
          if (p.id === products.id) {
            p.cantidad -= 1;
            if(p.cantidad < 0){
              setCart(newCart);
            }
            return p;
          }
          return p;
        });
        setCart(newCart);
      };
    
      const getQuantityTotal = () => {
        return cart.reduce((acc, purchase) => {
          return acc + purchase.cantidad;
        }, 0);
      };
    
      const getTotalPrice = () => {
        return cart.reduce((acc, purchase) => {
          return acc + purchase.price * purchase.cantidad;
        }, 0);
      };

    return (
        <CartContext.Provider
        value={{
            cart,
            ToCart,
            removeItem,
            clear,
            getTotalPrice,
            getQuantityTotal,
            removeQuantity
        }}
        >
        {children}
        </CartContext.Provider>
    );
    }
