import React from 'react';
import './Review.css';
import {useState, useEffect} from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Order from '../Order/Order';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [card, setCard] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    
    const handlePlaceOrder = () => {
        setCard([]);
        setOrderPlaced(true);
        processOrder();
    }

    const decrement = (productKey) => {
        const product = card.find(product => product.key === productKey);
        let quan = product.quantity;
        if (quan > 0) quan--;
        product.quantity = quan;
        // setCard(product.quantity);
        // console.log(quantity)
    }

    const increment = (productKey) => {
        console.log('incerement', card.quantity);
    }

    const handleRemoveProduct = (productKey) => {
        const newCard = card.filter(pd => pd.key !== productKey)
        setCard(newCard);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        // card data
        const savedCard = getDatabaseCart();
        const productKeys = Object.keys(savedCard);
        const cardProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCard[key];
            return product;
        });
        setCard(cardProducts);
    }, [])

    let happyYou;
    if (orderPlaced) { 
        happyYou = <img src={happyImage} alt=""/>
    }

    return (
        <div className="review-container">
            <div className="review-product">
                {
                    card.map(pd => <ReviewItem 
                        // key={pd.key}
                        product={pd}
                        decrement={decrement}
                        increment={increment}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }

                {happyYou}
            </div>

            <div className="order-preview">
                <Order card={card}>
                    <button onClick={handlePlaceOrder} className="add-cart">Place Order</button>
                </Order>
            </div>
        </div>
    );
};

export default Review;