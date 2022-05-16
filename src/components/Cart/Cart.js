import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered: {cart.length}  </p>
        </div>
    );
};

export default Cart;