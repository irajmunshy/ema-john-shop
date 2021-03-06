import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, quantity, key} = props.product;
    
    return (
        <div className="single-product">
            <h4 className="product-name">{name}</h4>
            <p className="seller">Quantity: {quantity}</p>
            <p className="quantity">
                <span onClick={() => props.decrement(key)}>-</span>
                <span onClick={() => props.increment(key)}>+</span>
            </p>
            <button className="add-cart" onClick={() => props.handleRemoveProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;