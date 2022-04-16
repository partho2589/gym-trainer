import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [confirmPassword, setConfirmPassword] = useState(" ")
    const [error, setError] = useState(" ")

    const handelEmailBlur = event =>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    };
    const handelConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    };
    const handelErrorBlur = event => {
        event.preventDefault();
        if (password !== confirmPassword){
            setError("Your two password don't match.")
            return
        }
    }
    return (
        <div className='from-container'>
            <div>
                <form onSubmit={handelErrorBlur} >
                    <h2 className='from-title'>Sign Up</h2>
                    <div className='input-group'>
                        <label htmlFor="email"> Email</label>
                        <input onClick={handelEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input onClick={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm password">Confirm password</label>
                        <input onClick={handelConfirmPasswordBlur} type="password" name="confirm password" id="" required />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='from-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already have an Account? <Link className='from-link' to="/Login"> Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;