import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faChildReaching, faWheelchair, faSmoking, faPaw, faBan } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap'
import { Switch } from 'antd';
import '../../App.css'

function Suitable(props) {
    const { setSuitable } = props;
    const [isClicked, setIsClicked] = useState([false, false, false, false, true]);
    const onChange = (index) => {
        const updatedSwitches = [...isClicked];
        updatedSwitches[index] = !updatedSwitches[index];
        setIsClicked(updatedSwitches);
        setSuitable(updatedSwitches);
    };
    const iconStyle = {
        fontSize: '1.5em',
        textAlign: 'right',

    }
    const overlayStyle = {
        position: 'absolute',
        transform: 'translate(-100%,0%)',
        zIndex: '3',
        color: 'red'
    };
    return (
        <div className='zoomout'>
            <h2>Who is this room suitable for?</h2>
            <Row className='mb-5'>
                <Col md={3} offset={5} sm={12} style={{ textAlign: 'center' }} >
                    <FontAwesomeIcon icon={faUserGroup} style={iconStyle} />
                    {isClicked[0] && (
                        <FontAwesomeIcon icon={faBan} style={{ ...iconStyle, ...overlayStyle }} />
                    )}
                </Col>
                <Col md={6} sm={12}>
                    <h4>Not suitable for Couples</h4>
                </Col>
                <Col md={1} sm={12} style={{ textAlign: 'center' }}>
                    <Switch name="index1" defaultChecked onChange={() => onChange(0)} />
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md={3} offset={5} style={{ textAlign: 'center' }} >
                    <FontAwesomeIcon icon={faChildReaching} style={iconStyle} />
                    {isClicked[1] && (
                        <FontAwesomeIcon icon={faBan} style={{ ...iconStyle, ...overlayStyle }} />
                    )}
                </Col>
                <Col md={6}>
                    <h4>Not suitable for Children</h4>
                </Col>
                <Col md={1} style={{ textAlign: 'center' }}>
                    <Switch name="index2" defaultChecked onChange={() => onChange(1)} />
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md={3} offset={5} style={{ textAlign: 'center' }} >
                    <FontAwesomeIcon icon={faSmoking} style={iconStyle} />
                    {isClicked[2] && (
                        <FontAwesomeIcon icon={faBan} style={{ ...iconStyle, ...overlayStyle }} />
                    )}
                </Col>
                <Col md={6}>
                    <h4>Not suitable for Smokers</h4>
                </Col>
                <Col md={1} style={{ textAlign: 'center' }}>
                    <Switch name="index3" defaultChecked onChange={() => onChange(2)} />
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md={3} offset={5} style={{ textAlign: 'center' }} >
                    <FontAwesomeIcon icon={faPaw} style={iconStyle} />
                    {isClicked[3] && (
                        <FontAwesomeIcon icon={faBan} style={{ ...iconStyle, ...overlayStyle }} />
                    )}
                </Col>
                <Col md={6}>
                    <h4>Pets are not allowed</h4>
                </Col>
                <Col md={1} style={{ textAlign: 'center' }}>
                    <Switch name="index4" defaultChecked onChange={() => onChange(3)} />
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md={3} offset={5} style={{ textAlign: 'center' }} >
                    <FontAwesomeIcon icon={faWheelchair} style={iconStyle} />
                    {isClicked[4] && (
                        <FontAwesomeIcon icon={faBan} style={{ ...iconStyle, ...overlayStyle }} />
                    )}
                </Col>
                <Col md={6}>
                    <h4>Room & common areas are not accessible</h4>
                </Col>
                <Col md={1} style={{ textAlign: 'center' }}>
                    <Switch name="index5" defaultunChecked onChange={() => onChange(4)} />
                </Col>
            </Row>

        </div>
    )
}

export default Suitable


