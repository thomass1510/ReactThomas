import React, {useState} from "react";
import './ItemCount.css'


const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h3 className="counter">{count}</h3>
            <div className="container-button">
                <button className="container-add-substract" onClick={decrement}>-</button>
                <button className="container-add-substract" onClick={increment}>+</button>
            </div>
            <div> <button
                disabled={count === 0}
                    className={count === 0 ? 'disabled' : 'add'}
                    onClick={() => onAdd(count)}>
                        Agregar al carrito
                </button>
            </div>
            
        </div>
    );
};

export default ItemCount;