import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar, farStar } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props.product)
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
        
            <div>
                <h4 className="product-name"><Link to={`/product/${key}`}>{name}</Link></h4>

                <div className="product-details">
                    <div className="product-detail">
                        <p className="seller">by: <span>{seller}</span></p>
                        <p className="price">${price}</p>
                        <p>Only {stock} left in stock - order soon</p>
                        {
                            props.showAddToCard && <button className="add-cart" onClick={() => props.handleAddProduct(props.product)}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                add to cart
                            </button>
                        }
                    </div>

                    <div className="product-rating">
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            {/* <FontAwesomeIcon icon={farStar} /> */}
                        </div>
                        <h3>Features</h3>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Product;
