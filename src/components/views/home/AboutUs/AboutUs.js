import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <h1 className='text-center my-3'>About Us</h1>
            <Row>
                <Col md={4} className="image-About">
                    <Image src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fluid />
                </Col>
                <Col md={8}>
                    <p className='display-6'>At The Rusty Spoon, we are passionate about creating a memorable dining experience for our guests. Our menu features locally-sourced ingredients and is inspired by traditional Southern cuisine with a modern twist.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
