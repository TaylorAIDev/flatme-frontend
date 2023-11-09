import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import '../../App.css'

export default function Signup(props) {

    const { handleRegInputChange } = props;
    const [signupData, setSignupData] = useState({});
    const handleChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        handleRegInputChange(signupData);
        return () => {

        }
    }, [signupData]);

    return (
        <div className='zoomout'>
            <Container>
                <div>
                    <h2>
                        Nice to meet you
                    </h2>
                    <div className="mb-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="Name">
                                <Form.Label className="text-center">First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter First Name"
                                    name="firstname"
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Name">
                                <Form.Label className="text-center">Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Last Name"
                                    name="lastname"
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="newPassword"
                                    onChange={handleChange} />
                                    <ul>
                                        <li>Use at least 8 characters</li>
                                        <li>Use upper and lower case charactes</li>
                                        <li>Use 1 or more numbers</li>
                                        <li>Optionally use special characters</li>
                                    </ul>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
}