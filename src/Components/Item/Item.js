import { products } from '../mock/products';
import './itemlist.css'
import { Link } from 'react-router-dom';

const Item = ({ img, name , id}) => {
    return (
        <div className="Item">
        <h1 className='title'>{name}</h1>
        <img className='imgProd' src={img} alt={name} />
        <Link to= {`/detail/${id}` } className="botonDetail">Ver detalle...</Link>
    </div>
    );
};

export default Item;