import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce( (total, prd) => total + prd.price, 0)

    let total = 0;
    for (let i = 0; i < cart.length; i++ ){
        const product = cart[i];
        // console.log("part", product);
        total = total + product.price; //ekhane price kivabe pacche map chara?
    }

    let shipping = 0
    if(total > 35){
        shipping = 0;
    }else if(total > 0){
        shipping = 12.99;
    }else if(total > 15){
        shipping = 4.99;
    }

    const tax = (total / 10).toFixed(2);

    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered: {cart.length}  </p>
            <p>Product Price: { formatNumber(total) }</p>
            {/* <p>Product Price: { total }</p> */}
            <p><small>Shipping cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;