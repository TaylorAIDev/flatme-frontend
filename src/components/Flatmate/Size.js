import React, { useState, useEffect } from 'react'
import { Row, Col, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faUsers } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'

function Size(props) {
    const { handleSizeInputChange } = props;
    const [sizeData, setSizeData] = useState({
        bathroom: 1,
        bedroom: 1,
        flatmates: 1
    });
    // const handleChange = (e) => {
    //     setSizeData({
    //         ...sizeData,
    //         [e.target.name]: e.target.value
    //     })
    // };

    useEffect(() => {
        handleSizeInputChange(sizeData);
        return () => {

        }
    }, [sizeData]);

    return (
        <div className='zoomout'>
            <h2>How big is your flat?</h2>
            <div style={{ fontSize: '1.5em' }}>
                <div className='mb-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='size'>
                            <FontAwesomeIcon icon={faBath} /> Bathroom
                        </Col>
                        <Col lg={6} md={6} sm={12} className='size_number'>
                            <div className="input-step step-success">
                                <button
                                    type="button"
                                    className="minus"
                                    disabled={sizeData.bathroom === 1}
                                    onClick={() => {
                                        setSizeData(prevState => {
                                            return {
                                                ...prevState,
                                                bathroom: prevState.bathroom - 1
                                            }
                                        })
                                    }}
                                >
                                    –
                                </button>
                                <Input
                                    type="number"
                                    className="product-quantity"
                                    value={sizeData.bathroom}
                                    min="1"
                                    max="100"
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="plus"
                                    disabled={sizeData.minimum_month === 12}
                                    onClick={() => {
                                        setSizeData(prevState => {
                                            return {
                                                ...prevState,
                                                bathroom: prevState.bathroom + 1
                                            }
                                        })
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='mb-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='size'>
                            <FontAwesomeIcon icon={faBed} /> Bedroom
                        </Col>
                        <Col lg={6} md={6} sm={12} className='size_number'>
                            <div className="input-step step-success">
                                <button
                                    type="button"
                                    className="minus"
                                    disabled={sizeData.bedroom === 1}
                                    onClick={() => {
                                        setSizeData(prevState => {
                                            return {
                                                ...prevState,
                                                bedroom: prevState.bedroom - 1
                                            }
                                        })
                                    }}
                                >
                                    –
                                </button>
                                <Input
                                    type="number"
                                    className="product-quantity"
                                    value={sizeData.bedroom}
                                    min="1"
                                    max="100"
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="plus"
                                    disabled={sizeData.minimum_month === 12}
                                    onClick={() => {
                                        setSizeData(prevState => {
                                            return {
                                                ...prevState,
                                                bedroom: prevState.bedroom + 1
                                            }
                                        })
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </Col>
                    </Row>

                </div>
                <div className='mb-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='size'>
                            <FontAwesomeIcon icon={faUsers} /> Flatmates
                        </Col>
                        <Col lg={6} md={6} sm={12} className='size_number'>
                            <div className="input-step step-success">
                                <button
                                    type="button"
                                    className="minus"
                                    disabled={sizeData.flatmates === 1}
                                    onClick={() => {
                                        setSizeData(prevState => {
                                            return {
                                                ...prevState,
                                                flatmates: prevState.flatmates - 1
                                            }
                                        })
                                    }}
                                >
                                    –
                                </button>
                                <Input
                                    type="number"
                                    className="product-quantity"
                                    value={sizeData.flatmates}
                                    min="1"
                                    max="100"
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="plus"
                                    disabled={sizeData.minimum_month === 12}
                                    onClick={() => {
                                        setSizeData(prevState => {
                                            return {
                                                ...prevState,
                                                flatmates: prevState.flatmates + 1
                                            }
                                        })
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div >
        </div >
    )
}
export default Size