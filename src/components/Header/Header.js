import React from 'react';
import  './Header.css'
import {Link} from 'react-router-dom'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const handelSignOut = () => {
        signOut(auth)
    }

    return (
        <div className='container'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to = "/checkout">Checkout</Link>
                <Link to ="/blog">Blog</Link>
                <Link to ="/about">About</Link>
                {
                    user ?
                    <button className='sign-out-btn' onClick={handelSignOut}>Sign out</button>
                    :
                    <Link to ="/login">Login</Link>}
            </nav>
             
        </div>
    );
};

export default Header;