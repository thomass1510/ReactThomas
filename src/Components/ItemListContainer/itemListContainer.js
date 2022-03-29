import { useEffect, useState } from "react";
import ItemList from "../Item/ItemList";
import { NavLink, useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";
import { useNotificationServices } from '../../services/Notification/Notification'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([])

    const { categoryId } = useParams();

    const setNotification = useNotificationServices()


    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
        ? query(
            collection(firestoreDb, "products"),
            where("category", "==", categoryId)
        )
        : collection(firestoreDb, "products");

        getDocs(collectionRef)
        .then((response) => {
            const products = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
            });

            setProducts(products);
        }).catch((error) => {
            setNotification(`Error buscando productos: ${error}`);
        }).finally(() => {
            setLoading(false)
        })

    return () => {
        setProducts();
    };
    }, [categoryId]);

    useEffect(() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(cat => {
            return { id: cat.id, ...cat.data()}
            })
            setCategories(categories)
        })
    }, [])


    return (
        <>
        {loading ? (
            <div>
            <div>
                <span>Loading...</span>
            </div>
            </div>
        ) : (
        <div>
            <div>
                {categories.map((cat) => (
                    <NavLink
                        key={cat.id}
                        to={`/products/${cat.id}`}
                        className="nav-link">
                        {cat.description}
                    </NavLink>
                ))}
        </div>

            <ItemList products={products} />
            </div>
        )}
        </>
    );
};

export default ItemListContainer;
