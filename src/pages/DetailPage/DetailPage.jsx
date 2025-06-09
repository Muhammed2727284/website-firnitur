import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './detail.scss';
import { addCart } from "../../redux/reducer";
import { useDispatch } from "react-redux";

const DetailPage = () => {
    const [data, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data})=> setData(data));
    },[params])
    return (
        <div className="detail">
           <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={data.image} alt="" className="detail-img" />
                    </div>
                    <div className="col-6">
                        <h2 className="detail-title">{data.title}</h2>
                        <p className="detail-text">{data.description}</p>
                        <p className="detail-text">{data.category}</p>
                        <p className="detail-price">${data.price}</p>

                        <div className="detail-block">
                            <button onClick={()=>{
                                dispatch(addCart(data))
                            }}>buy</button>
                            <button onClick={()=>{
                                navigate(-1)
                            }}>go back</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default DetailPage;
