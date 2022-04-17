import React from 'react';
import './Home.css'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import banner from '../images/img1.jpg'
const Home = () => {

    return (
        <div>

            <img className='banner' src={banner} alt="" />
            <div>
                <h1> Services</h1>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={banner} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;