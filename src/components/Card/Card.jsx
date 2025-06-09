import './card.scss';
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/reducer';
import { useDispatch } from 'react-redux';

const Card = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div className="card">
            <Link to={`/product/${item.id}`} style={{
                textDecoration: 'none',
                color: '#000'
            }}>
            <img className="card-img" src={item.image} alt="" />
            <h3 className="card-title">{
                item.title.length > 30
                    ? item.title.substr(0, 27).trim() + '...'
                    : item.title
            }</h3>
            <p className="card-text">{
                item.description.length > 30
                    ? item.description.substr(0, 27).trim() + '...'
                    : item.description
            }</p>
            <p className="card-text">{item.category}</p>
            </Link>
            <div className="card-block">
                <p>${item.price}</p>
                <button onClick={()=>{
                    dispatch(addCart(item));
                }}>buy</button>
            </div>
        </div>
    );
}

export default Card;
