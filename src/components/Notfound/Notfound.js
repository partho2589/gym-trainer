import React from 'react';
import not from '../images/404.jpg'
import './Notfound.css'
const Notfound = () => {
    return (
        <div className='container'>
          <img src={not} alt="" />
        </div>
    );
};

export default Notfound;