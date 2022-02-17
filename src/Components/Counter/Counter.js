import React, {useState} from "react";
import './Counter.css'


const Counter = ({stock, initial}) => {
    const [number, setNumber] = useState(1);


    const add = () => {
        number < stock && setNumber(number +1);
    };

    const substract = () =>{

        number > initial && setNumber(number -1);

    };


    const addToCart = () =>{

        alert(`Se agregaron al carrito ${number} items`);

    };

    return(
        <div className= "container-button">
            <div className="container-add-substract">
                <button onClick={add}>+</button>
                <p>{number}</p>
                <button onClick={substract}>-</button>
            </div>
            <div>
                <button
                    disabled={number === 0}
                    className={number === 0 ? 'disabled' : 'add'}
                    onClick={addToCart}>
                        Agregar al carrito
                </button>
            </div>
        </div>
    )


}


export default Counter;

