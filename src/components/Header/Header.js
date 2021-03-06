import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {

    // document.getElementById('searchProduct').addEventListener('keypress', (event) => {
    //     console.log('hello')
    // });

    return (
        <div className='header'>
            {/* <img src={logo} alt="logo"/> */}
            <h1>Bayzid</h1>

            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage Inventory here</Link>
            </nav>

            <div className="search-area">
                <input id="searchProduct" type="text" placeholder="type here to search"/>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>0</span>
            </div>
        </div>
    );
};

export default Header;