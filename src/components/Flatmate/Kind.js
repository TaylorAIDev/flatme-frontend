import React, { useState } from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBedPulse } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'

const Kind = (props) => {
    const {kind, setKind} = props;
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        setKind(size);
    };
    return (
        <div className='zoomout'>
            <h2>What kind of room are you looking for?</h2>
            <div style={{ display: 'flex', marginTop: '100px' }}>
                <Col style={{ textAlign: 'center' }}>
                    <button
                        style={{
                            width: '150px',
                            height: '150px',
                            margin: '20px',
                            borderRadius: '20%',
                            borderColor: '#2bbcd9',
                            fontSize: '4em',
                            backgroundColor: selectedSize === 'single' ? '#2bbcd9' : '#fff',
                            color: selectedSize === 'single' ? '#ffffff' : '#000000',
                        }}
                        onClick={() => handleSizeClick('single')}
                    >
                        <FontAwesomeIcon icon={faBed} />
                    </button>
                    <h4>Single room</h4>
                    <p>They'll get the room to themselves</p>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                    <button
                        style={{
                            width: '150px',
                            height: '150px',
                            margin: '20px',
                            borderRadius: '20%',
                            fontSize: '4em',
                            borderColor: '#2bbcd9',
                            backgroundColor: selectedSize === 'shared' ? '#2bbcd9' : '#fff',
                            color: selectedSize === 'shared' ? '#ffffff' : '#000000',
                        }}
                        onClick={() => handleSizeClick('shared')}
                    >
                        <FontAwesomeIcon icon={faBedPulse} />
                    </button>
                    <h4>Shared room</h4>
                    <p>Other flatmates live in the same room</p>
                </Col>
            </div>
        </div>
    );
};

export default Kind;