import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Label } from 'reactstrap'
import { useState } from 'react';
import '../../App.css'

export default function Description(props) {
    const { setDescription } = props;
    const [text, setText] = useState({
        flatmateText: '',
        roomText: '',
        idealflatmateText: ''
    })
    const handleChange = (e) => {
        setText({
            ...text,
            [e.target.name]: e.target.value
        })
        setDescription({
            ...text,
            [e.target.name]: e.target.value
        })
    };
    return (
        <div className='zoomout'>
            <h2>Write a description</h2>
            <div style={{ margin: '50px' }}>
                <Row>
                    <div>
                        <Label htmlFor="exampleFormControlTextarea5" className="form-label">
                            <strong>About the flatmate...</strong>
                        </Label>

                    </div>
                </Row>
                <Row>
                    <Col>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea5"
                            name='flatmateText'
                            value={text.flatmateText}
                            rows="3"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faCircleExclamation} />{" "}
                        Prospective flatmates like to know
                    </Col>
                </Row>
            </div>
            <div style={{ margin: '50px' }}>
                <Row>

                    <Label htmlFor="exampleFormControlTextarea5" className="form-label">
                        <strong>About the room...</strong>
                    </Label>
                </Row>
                <Row>
                    <Col>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea5"
                            name='roomText'
                            rows="3"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faCircleExclamation} />{" "}
                        Prospective flatmates like to know
                    </Col>
                </Row>

            </div>
            <div style={{ margin: '50px' }}>
                <Row>
                    <Label htmlFor="exampleFormControlTextarea5" className="form-label">
                        <strong>Your ideal flatmate...</strong>
                    </Label>
                </Row>
                <Row>
                    <Col>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea5"
                            name='idealflatmateText'
                            rows="3"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faCircleExclamation} />{" "}
                        Prospective flatmates like to know
                    </Col>
                </Row>


            </div>
        </div>
    )
}
