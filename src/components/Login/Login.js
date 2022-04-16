import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='from-container'>
            <div> 
            <form >
            <h2 className='from-title'>Login</h2>
            <div className='input-group'>
                <label htmlFor="email"> Email</label>
                <input type="email" name="email" id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required />
            </div>
            <input className='from-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema-John? <Link className='from-link' to ="/signup"> Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;