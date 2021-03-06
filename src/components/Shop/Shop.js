import React, { useEffect } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [card, setCard] = useState([]);

    useEffect(() => {
        const savedCard = getDatabaseCart();
        const productKeys = Object.keys(savedCard);
        const previousCard = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCard[existingKey];
            return product;
        });
        setCard(previousCard);
    }, [])

    const handleAddProduct = (product) => {
        const productToAdded = product.key;
        const sameProduct = card.find(pd => pd.key === productToAdded);
        let count = 1, newCard;

        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = card.filter(pd => pd.key !== productToAdded)
            newCard = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCard = [...card, product];
        }
        setCard(newCard);
        addToDatabaseCart(product.key, count);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.key}
                        showAddToCard={true}
                        handleAddProduct = {handleAddProduct}
                        product={product}
                        ></Product>)
                }    
            </div>
        
            <div className="cart-container">
                <Order card={card}>
                    <Link to="/review">
                        <button className="order-btn">Review Order</button>
                    </Link>
                </Order>
            </div>
        </div>
    );
};

export default Shop;