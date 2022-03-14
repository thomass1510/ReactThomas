import { createContext, useState, useContext } from "react";
import "./notificationServices"

const Notification = ({ message }) => {

    if (message === "") {
        return null;
    }

    return <div className="notificationStyles">{message}</div>;
};

const NotificationContext = createContext();

export const NotificationServicesProvider = ({ children }) => {
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");

    const setNotification = (severity, message) => {
        setMessage(message);
        setSeverity(severity);
        setTimeout(() => {
        setMessage("");
        }, 5000);
    };

    return (
        <NotificationContext.Provider value={setNotification}>
        <Notification message={message} severity={severity} />
        {children}
        </NotificationContext.Provider>
    );
};

export const useNotificationServices = () => {
    return useContext(NotificationContext);
};