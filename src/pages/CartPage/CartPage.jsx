import './cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, decrementCart, deleteCart } from '../../redux/reducer';

const CartPage = () => {
    const cardData = useSelector(s => s.reducer.cartData);
    const dispatch = useDispatch();
    return (
        <div>
           <div className="container">
                {
                    cardData.map(item =>{
                        return <div className='card-item' key={item.id}>
                                <div className="card-item-left">
                                    <img src={item.image} alt="" className="card-item-left-img" />
                                    <h3 className="card-item-left-title">{item.title}</h3>
                                </div>
                                <div className="card-item-right">
                                    <div className="card-item-right-count">
                                        <button onClick={()=>{
                                            dispatch(addCart(item))
                                        }}>+</button>
                                        <span>{item.count}</span>
                                        <button onClick={()=>{
                                            dispatch(decrementCart(item))
                                        }}>-</button>
                                    </div>
                                    <p>${item.price * item.count}</p>
                                    <button onClick={()=>{
                                            dispatch(deleteCart(item))
                                        }}>delete</button>
                                </div>
                        </div>
                    })
                }

                <p>Total: ${cardData.reduce((acc, rec)=>{
                    return acc + (rec.count * rec.price)
                },0)}</p>
           </div>
        </div>
    );
}

export default CartPage;
