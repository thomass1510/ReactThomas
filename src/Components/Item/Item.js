import { products } from '../../mock/products';
import Counter from '../Counter/Counter';
import './itemlist.css'

const Item = ({ img, name, price, stock}) => {
    return (
        <div className="Item">
            <h1 className='title'>{name}</h1>
            <img className='imgProd' src={img} alt={name} />
            <p>$ {price}</p>
            <Counter stock={stock} initial= {0}/>
            <button className='botonVerMas'>Ver detalle...</button>
        </div>
        
    );
};

export default Item;