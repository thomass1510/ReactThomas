import { CartContext } from "../../context/CartContext";
import React, { useContext, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import './Cart.css';
import Togglable from "../Togglable/Togglable.js";
import ContactForm from "../ContactForm/ContactForm";
import {
    writeBatch,
    getDoc,
    doc,
    addDoc,
    collection,
    Timestamp,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebase";


export default function Cart() {
    const [processingOrder, setProcessingOrder] = useState(false);
    const [orderFinished, setOrderFinished] = useState(false);
    const [contact, setContact] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
    });

    const { cart, ToCart , removeQuantity, removeItem, getTotalPrice, getQuantityTotal, clear } = useContext(CartContext);

    const contactFormRef = useRef();


    const confirmOrder = () => {
        if (
            contact.phone !== "" &&
            contact.address !== "" &&
            contact.comment !== "" &&
            contact.name !== ""
        ) {
            setProcessingOrder(true);
    
            const objOrder = {
                buyer: contact,
                items: cart,
                total: getTotalPrice(),
                date: Timestamp.fromDate(new Date()),
            };
    
            const batch = writeBatch(db);
            const outOfStock = [];
    
            const executeOrder = () => {
                if (outOfStock.length === 0) {
                    addDoc(collection(db, "orders"), objOrder)
                    .then(({ id }) => {
                        batch.commit().then(() => {
                            clear();
                            alert(
                                "success",
                                `Thank you! Your purcharse ID is: ${id}`
                            );
                        setOrderFinished(true);
                        });
                    })
                    .catch((error) => {
                        alert("error", error);
                    })
                    .finally(() => {
                        setProcessingOrder(false);
                    });
                } else {
                    outOfStock.forEach((prod) => {
                        alert(
                            "error",
                            `${prod} hasn't stock, please check tomorrow!`
                        );
                        removeItem(prod);
                    });
                }
            };
    
            objOrder.items.forEach((prod) => {
                getDoc(doc(db, "products", prod.prods.id))
                    .then((response) => {
                        if (response.data().stock >= prod.cantidad) {
                            batch.update(doc(db, "products", response.id), {
                                stock: response.data().stock - prod.cantidad,
                            });
                        } else {
                            outOfStock.push(response.data().album);
                        }
                    })
                .catch((error) => {
                    console.log(error);
                })
                .then(() => {
                    executeOrder();
                })
                .finally(() => {
                    setProcessingOrder(false);
                });
            });
        } else {
            alert(
                "error",
                "Please complete the contact form to continue"
            );
        }
    };
    
        if (processingOrder) {
            return <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>;
        }
    
        if (cart.length === 0 && orderFinished === false) {
            return (
                <>
                <p className="titleCartEmpty">Your cart is empty</p>
                <div className="containerCartEmpty">
                    <NavLink to="/products">
                    <button className="btnBack">Back to Shop</button>
                    </NavLink>
                </div>
                </>
            );
        } else if (orderFinished === true) {
            return (
            <div>
                <h2 className="cart-title">Thanks for your purcharse!</h2>
                <div className="containerPurchaseBtn">
                    <NavLink to="/"><button className="btnBackHome">Back Home</button></NavLink>
                </div>
            </div>
            );
        }


    return (
        <div>
            <p>YOUR CART</p>
            <ul>
                {cart.length <= 0 ? (
                <>
                <p>Your cart is empty</p>
                <div>
                    <NavLink to="/">
                    <button>Back to Shop</button>
                    </NavLink>
                </div>
                </>
                ) : (
                    cart.map((prods) => (
                                <div>
                                    <li key={prods.id}>
                                    <h1 className='title'>{prods.name}</h1>
                                    {cart.length > 0 && <p>Cantidad: {getQuantityTotal()}</p>}
                                    <h2 className='title'>$ {prods.price}</h2>
                                    <button onClick={() => removeQuantity(prods)}>Remove 1 unit</button>
                                    <button onClick={() => removeItem(prods)}>Remove</button>
                                    </li>
                                </div>
                    ))
                    )}
            </ul>
            
                {cart.length > 0 && <p>TOTAL: {getTotalPrice()} USD</p>}
                <div>
                    <button onClick={() => clear()}>
                        Clear Cart
                    </button>
                    <button onClick={() => confirmOrder()}>
                        Buy now
                    </button>
                </div>
                {contact.phone !== "" &&
                contact.address !== "" &&
                contact.comment !== "" &&
                contact.name !== "" && (
                    <div className="formRend">
                        <h2 className="formRendTittle">Your Information:</h2>
                        <h4>Name: {contact.name}</h4>
                        <h4>Phone: {contact.phone}</h4>
                        <h4>Adress: {contact.address}</h4>
                        <h4>Comment: {contact.comment}</h4>
                        <button
                            onClick={() =>
                                setContact({ phone: "", address: "", comment: "" })
                            }
                            className="ButtonDeleteForm"
                            style={{ backgroundColor: "#db4025" }}
                        >
                        Delete Information
                        </button>
                    </div>
                )}
            <Togglable
                buttonLabelShow={
                    contact.phone !== "" &&
                    contact.address !== "" &&
                    contact.comment !== "" &&
                    contact.name !== ""
                    ? "Edit Contact"
                    : "Add Contact"
                }
                ref={contactFormRef}
                >
                <ContactForm
                    toggleVisibility={contactFormRef}
                    setContact={setContact}
                />
            </Togglable>
        </div>
    )
}