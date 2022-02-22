import { products } from '../mock/products';
import './itemlist.css'

const Item = ({ img, name}) => {
    return (
        <div className="Item">
        <h1 className='title'>{name}</h1>
        <img className='imgProd' src={img} alt={name} />
    </div>
    );
};

export default Item;