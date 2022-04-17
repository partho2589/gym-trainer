import React from 'react';
import './About.css'
import partho from '../images/partho.jpg'
const About = () => {
    return (
        <div>
            <div>
                <img className='image' src={partho} alt="" />
                <h3>Name: Partho malo</h3>
                <p>I will be completing the web development course within the next five months. After that I will learn one of the two programming languages like Python or PHP. I will be admitted in the fourth semester of Diploma Engineering.</p>
            </div>
        </div>
    );
};

export default About;