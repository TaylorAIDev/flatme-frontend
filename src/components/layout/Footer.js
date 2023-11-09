import React from 'react';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { getByDisplayValue } from '@testing-library/react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#363636',height:'auto',position:'absolute',width:'100%'}}>
            <Container style={{display:'inline'}} >
                <Row>
                    <Col md={3} style={{textAlign:'center'}}>
                        <a href="/" style={{color:'white'}}>Get in Touch</a>
                    </Col>
                    <Col md={3} style={{textAlign:'center'}}>
                        <a href="/" style={{color:'white'}}>About Us</a>
                    </Col>
                    <Col md={3} style={{textAlign:'center'}}>
                        <a href="/" style={{color:'white'}}>Help and Support</a>
                    </Col>
                    <Col md={3} style={{textAlign:'center'}}>
                        <a href="/" style={{color:'white'}}>Privacy Policy</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default Footer;