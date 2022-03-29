import CartContext from "../../context/CartContext";
import React, { useContext, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import './Cart.css';
import Togglable from '../Togglable/Togglable'
import ContactForm from "../ContactForm/ContactForm";
import {
    writeBatch,
    getDoc,
    doc,
    addDoc,
    collection,
    Timestamp,
} from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";
import { useNotificationServices } from "../../services/Notification/Notification";


export default function Cart() {
    const [processingOrder, setProcessingOrder] = useState(false);
    const [orderFinished, setOrderFinished] = useState(false);
    const [contact, setContact] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
    });

    const { cart, removeItem, getTotalPrice, getQuantityTotal, clear } = useContext(CartContext);

    const contactFormRef = useRef();

    const setNotification = useNotificationServices();


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
    
            const batch = writeBatch(firestoreDb);
            const outOfStock = [];
    
            const executeOrder = () => {
                if (outOfStock.length === 0) {
                    addDoc(collection(firestoreDb, "orders"), objOrder)
                    .then(({ id }) => {
                        batch.commit().then(() => {
                            clear();
                            alert(
                                `Thank you! Your purcharse ID is: ${id}, No worries, you'll receive all the information by email`
                            );
                        setOrderFinished(true);
                        });
                    })
                    .finally(() => {
                        setProcessingOrder(false);
                    });
                } else {
                    outOfStock.forEach((prod) => {
                        alert(
                            `Sorry!! We've no stock right now, please check tomorrow!`
                        );
                        removeItem(prod);
                    });
                }
            };
    
            objOrder.items.forEach((prod) => {
                getDoc(doc(firestoreDb, "products", prod.item.id))
                    .then((response) => {
                        if (response.data().stock >= prod.quantity) {
                            batch.update(doc(firestoreDb, "products", response.id), {
                                stock: response.data().stock - prod.quantity,
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
                <h2 className="cart-title">Thanks for your purcharse! Hope see you soon!</h2>
                <div className="containerPurchaseBtn">
                    <NavLink to="/"><button className="btnBackHome">Back Home</button></NavLink>
                </div>
            </div>
            );
        }


    return (
        <div className="cartPage">
            <p className='cart-title'>YOUR CART</p>
            <ul>
                {cart.length <= 0 ? (
                <>
                <p className="titleCartEmpty">Your cart is empty</p>
                <div className="containerCartEmpty">
                    <NavLink to="/products">
                    <button className="btnBack">Back to Shop</button>
                    </NavLink>
                </div>
                </>
                ) : (
                    cart.map((item) => (
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-xs-12">
                                    <li className="cartItemsCheck" key={item.item.id}>
                                    <p className="cartItem">{item.item.name}</p>
                                    {cart.length > 0 && <p className="cartItem">Cantidad: {getQuantityTotal()}</p>}
                                    <p className="cartItem">{item.item.price} USD</p>
                                    <button className="btnRemove" onClick={() => removeItem(item)}>X</button>
                                    </li>
                                </div>
                            </div>
                        </div>
                    ))
                    )}
            </ul>
            
                {cart.length > 0 && <p className="cartTotal">TOTAL: {getTotalPrice()} USD</p>}
                <div className="containerTogg2">
                    <button onClick={() => clear()} className="ButtonCancel">
                        Clear Cart
                    </button>
                    <button onClick={() => confirmOrder()} className="ButtonConfirm">
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