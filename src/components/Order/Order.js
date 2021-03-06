import './Order.css';
import React from 'react';
import Header from '../Header/Header';

const Order = (props) => {
    const card = props.card;
    <Header card={card}></Header>
    // console.log(card)
    let totalPrice = card.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0);
    // let totalPrice = 0;
    // for (let i = 0; i < card.length; i++) {
    //     const element = card[i].price * card[i].quantity;
    //     totalPrice = totalPrice + element;
    // }
    
    let totalItems = card.reduce((totalItems, product) => totalItems + product.quantity ,0);

    let shipping;
    (totalPrice > 15 ? shipping = 4.99 : shipping = 0)

    totalPrice = totalPrice + shipping;

    let tax  = 0, totalTax = 0;
    tax = totalPrice * .1;
    totalTax = totalTax + tax;

    const total = totalTax + totalPrice;

    return (
        <div className="order-details">
            <h2>Order Summary</h2>
            <h4>Items Ordered <span>{card.length}</span></h4>

            <div>
                <div className="tut"> 
                    <p>Items:</p>
                    <p><span>{totalItems}</span></p>
                </div>
               
                <div className="tut"> 
                    <p>Shipping & Handling:</p>
                    <p>$<span>{shipping}</span></p>
                </div>

                <div className="tut"> 
                    <p>Total Before Tax:</p>
                    <p>$<span>{totalPrice.toPrecision(3)}</span></p>
                </div>

                <div className="tut"> 
                    <p>Estimated Tac:</p>
                    <p>$<span>{totalTax.toPrecision(3)}</span></p>
                </div>

                <div className="total-order tut"> 
                    <p>Order Total:</p>
                    <p>$<span>{(total.toPrecision(3))}</span></p>
                </div>
            </div>

             {
                 props.children
             }
        </div>
    );
};

export default Order;