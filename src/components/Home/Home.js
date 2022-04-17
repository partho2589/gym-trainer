import React from 'react';
import './Home.css'
import Card from 'react-bootstrap/Card'
import banner from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import { Button, } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const Home = () => {

    return (
        <div>

            <img className='banner' src={banner} alt="" />
            <h1>My Services</h1>
            <div className='card-container'>

                <Card >
                    <Card.Img className='card-img' variant="top" src={img2}/>
                    <Card.Body>
                        <Card.Title className='card-title-price'>The Six-Month Plan</Card.Title>
                        <Card.Text>
                            The first step always feels like the hardest in any life challenge.But you can genuinely start to change your life for the better in just six short months.
                        </Card.Text>
                        <Card.Text className='card-title-price'>
                            Price: $1500
                        </Card.Text>
                        <Button className='card-btn' variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img className='card-img' variant="top" src={img3}/>
                    <Card.Body>
                        <Card.Title className='card-title-price'>The 9 Month Lifestyle Transformation </Card.Title>
                        <Card.Text>
                            A 6 month plan will put you on the right track, but a nine-month transformation can leave you feeling and looking years younger.
                        </Card.Text>
                        <Card.Text className='card-title-price'>
                            Price: $4500
                        </Card.Text>
                        <Button className='card-btn' variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img className='card-img' variant="top" src={img4}/>
                    <Card.Body>
                        <Card.Title className='card-title-price'>The 12-Month Body Transformation</Card.Title>
                        <Card.Text>
                            A year might not feel long, but it will soon fly by without our fast, fun, and highly rewarding sessions.
                        </Card.Text>
                        <Card.Text className='card-title-price'>
                            Price: $6000
                        </Card.Text>
                        <Button  className='card-btn' variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;