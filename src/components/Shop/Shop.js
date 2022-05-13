import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then (res => res.json())
        .then (data => setProducts(data))
    }, [])


    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map(prod => <Product product={prod}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h3>This is Cart</h3>
            </div>
        </div>
    );
};

export default Shop;