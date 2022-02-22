import { products } from '../mock/products';
import Counter from "../Counter/Counter";

const ItemDetail = ({products}) =>{

    return (
        <div className="Item">
        <h1 className='title'>{products.name}</h1>
        <img className='imgProd' src={products.img} alt={products.name} />
        <h2 className='title'>{products.description}</h2>
        <h2 className='title'>$ {products.price}</h2>
    </div>
    );
    
    
    }
    
    
    export default ItemDetail;