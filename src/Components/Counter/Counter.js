import React, {useState} from "react";
import './Counter.css'


const Counter = ({stock, initial, addtoCart}) => {
    const [number, setNumber] = useState(1);


    const add = () => {
        number < stock && setNumber(number +1);
    };

    const substract = () =>{

        number > initial && setNumber(number -1);

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
                    onClick={() => addtoCart(number)}>
                        Agregar al carrito
                </button>
            </div>
        </div>
    )


}


export default Counter;

