import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then (res => res.json())
        .then (data => setProducts(data))
    }, []);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.slice(0,10).map((prod,index) => <Product handleAddProduct={handleAddProduct} product={prod} key={index}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;