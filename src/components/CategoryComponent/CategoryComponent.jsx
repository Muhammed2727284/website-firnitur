import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from '../Card/Card';

const CategoryComponent = ({category = '', limit = 0}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setProducts([]);
        axios(
            limit 
            ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}`
        )
        .then(({data}) => setProducts(data))
    }, [category, limit]);


    return (
        <div className="container">
            <br />
            <h2>{category}</h2>
            <br />
            <div className="row">
                {
                products.map(item =>{
                    return <div className="col-3" key={item.id}>
                        <Card item={item} />
                    </div>
                })
                }
            </div>

        </div>
    );
}

export default CategoryComponent;
