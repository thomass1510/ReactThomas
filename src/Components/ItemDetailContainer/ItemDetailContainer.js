import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../itemDetails/ItemDetails";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";
import { useNotificationServices } from '../../services/Notification/Notification'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const setNotification = useNotificationServices()

    useEffect(() => {
        setLoading(true);
        getDoc(doc(firestoreDb, `products/${id}`))
            .then((response) => {
            const product = { id: response.id, ...response.data() };
            setProduct(product);
            })
            .catch((error) => {
                setNotification(`Error buscando producto: ${error}`)
            }) 
            .finally(() => {
            setLoading(false);
            setShowDetails(true);
            });
    }, [id]);

    return (
        <div className="itemDetailContainer">
        {showDetails && <ItemDetails product={product} />}
        {loading && 
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary spinner" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
        </div>
    );
};

export default ItemDetailContainer;