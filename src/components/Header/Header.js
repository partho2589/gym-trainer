import React from 'react';
import  './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className='container'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to ="/blog">Blog</Link>
                <Link to ="/about">About</Link>
                <Link to ="/login">Login</Link>
            </nav>
            
        </div>
    );
};

export default Header;