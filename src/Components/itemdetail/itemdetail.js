import { products } from '../mock/products';
import Counter from "../Counter/Counter";
import './itemDetail.css'

const ItemDetail = ({product}) =>{

    return (
        <div className='container1'>
            <div className="Item ItemDetail">
                <h1 className='title'>{product.name}</h1>
                <img className='imgProd' src={product.img} alt={product.name} />
                <h2 className='title'>$ {product.price}</h2>
                <Counter stock={product.stock} initial={1}/>
            </div>
            <div className='lorem'>
                <p className='text'>{product.description}</p>
            </div>
    </div>
    
    );
    
    
    }
    
    
    export default ItemDetail;