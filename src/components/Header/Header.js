import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
           <nav>
           <a href="/home">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About us</a>
           </nav>
           <h1>Welcome my React website</h1>
        </div>
    );
};

export default Header;