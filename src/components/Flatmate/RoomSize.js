import React, { useState } from 'react';
import { Col } from 'reactstrap';
import '../../App.css'

const RoomSize = (props) => {
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        props.setRoomsize(size);
    };
    return (
        <div className='zoomout' >
            <h2>How big is the room?</h2>
            <div className='roomsize'>
                <Col className='roomsize_button'>
                    <button
                        style={{
                            width: '150px',
                            height: '150px',
                            margin: '20px',
                            borderRadius: '20%',
                            borderColor: '#2bbcd9',
                            fontSize: '4em',
                            backgroundColor: selectedSize === 'S' ? '#2bbcd9' : '#fff',
                            color: selectedSize === 'S' ? '#ffffff' : '#000000',
                        }}
                        onClick={() => handleSizeClick('S')}
                    >
                        S
                    </button>
                    <div className='roomsize_text'>
                        <h4>Small</h4>
                        <p>Fits only a single bed</p>
                    </div>
                    
                </Col>
                <Col className='roomsize_button'>
                    <button
                        style={{
                            width: '150px',
                            height: '150px',
                            margin: '20px',
                            borderRadius: '20%',
                            fontSize: '4em',
                            borderColor: '#2bbcd9',
                            backgroundColor: selectedSize === 'M' ? '#2bbcd9' : '#fff',
                            color: selectedSize === 'M' ? '#ffffff' : '#000000',
                        }}
                        onClick={() => handleSizeClick('M')}
                    >
                        M
                    </button>
                    <div className='roomsize_text'>
                        <h4>Medium</h4>
                        <p>Fits a double bed, not much else</p>
                    </div>

                </Col>
                <Col className='roomsize_button'>
                    <button
                        style={{
                            width: '150px',
                            height: '150px',
                            margin: '20px',
                            borderRadius: '20%',
                            fontSize: '4em',
                            borderColor: '#2bbcd9',
                            backgroundColor: selectedSize === 'L' ? '#2bbcd9' : '#fff',
                            color: selectedSize === 'L' ? '#ffffff' : '#000000',
                        }}
                        onClick={() => handleSizeClick('L')}
                    >
                        L
                    </button>
                    <div className='roomsize_text'>
                        <h4>Large</h4>
                        <p>Fits a queen size bed with space for a desk</p>
                    </div>

                </Col>
                <Col className='roomsize_button'>
                    <button
                        style={{
                            width: '150px',
                            height: '150px',
                            margin: '20px',
                            borderRadius: '20%',
                            fontSize: '4em',
                            borderColor: '#2bbcd9',
                            backgroundColor: selectedSize === 'XL' ? '#2bbcd9' : '#fff',
                            color: selectedSize === 'XL' ? '#ffffff' : '#000000',
                        }}
                        onClick={() => handleSizeClick('XL')}
                    >
                        XL
                    </button>
                    <div className='roomsize_text'>
                        <h4>Extra Large</h4>
                        <p>Fits a large bed with plenty of space for other furnishings like a couch</p>
                    </div>

                </Col>
            </div>
        </div>
    );
};

export default RoomSize;