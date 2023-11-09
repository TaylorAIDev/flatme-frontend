import axios from 'axios'
import React, { useEffect } from 'react'
import { CDBBtn } from "cdbreact";
import { useState } from 'react'
import { Container, Row, Col, Table, Input, Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheelchair, faLocationDot, faFaceSmile, faBed, faBath, faUsers, faMaximize } from '@fortawesome/free-solid-svg-icons'
import Board_Map from './Board_Map';
import { API_URL } from '../Main/ApiUrl';

export default function Dashboard() {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [move_date, setMove_date] = useState('')
    const [preparePay, setPreparePay] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [stay_duration, setStay_duration] = useState('')
    const [describe, setDescribe] = useState([])
    const [identify, setIdentify] = useState([])
    const [accessibility, setAccessibility] = useState('')
    const [kind, setKind] = useState('');
    const [room_size, setRoom_size] = useState('');
    const [size, setSize] = useState({});
    const [matching_names, setMatching_names] = useState([]);
    console.log(matching_names)
    // const API_URL = 'http://localhost:8000/api/'

    const email = localStorage.getItem('email')
    useEffect(() => {
        axios.post(`${API_URL}profile/`, { email })
            .then(res => {
                setName(res.data.name);
                setGender(res.data.gender);
                setAge(res.data.age);
                setMove_date(res.data.move_date);
                setPreparePay(res.data.preparePay);
                setAddress(res.data.address);
                setDescription(res.data.description);
                setStay_duration(res.data.stay_duration);
                setDescribe(res.data.describe);
                setIdentify(res.data.identify);
                setAccessibility(res.data.accessibility);
                setKind(res.data.kind);
                setRoom_size(res.data.room_size);
                setSize(res.data.size);
                setMatching_names(res.data.matching_names);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='App'>
            <Container>
                <div className='ml-2 mr-2 mt-2'>
                    <Row>
                        <Col sm={12} lg={12}>
                            <h2 style={{ textAlign: 'left', color: '#3d997a' }}><strong>{name}</strong></h2>
                            <p style={{ textAlign: 'left' }}>is looking for a place up to <strong>${preparePay}</strong>
                                /wk near <strong style={{ color: '#2bbcd9' }}>{address}</strong></p>
                            <Table className="caption-top table-nowrap mb-0">
                                <tbody>
                                    <tr>
                                        <td className="align-left">Ready to move in from</td>
                                        <td>{move_date.split("T")[0]}</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium">Looking for</td>
                                        <td>room in a flat</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium">Stay duration</td>
                                        <td>{stay_duration}</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-medium">Requirements</td>
                                        <td>{accessibility === true ?
                                            <><FontAwesomeIcon icon={faWheelchair} color='red' /> {"room & common areas must be accessible"}</> :
                                            <><FontAwesomeIcon icon={faWheelchair} /> {"I don't have any accessibility requirements"}</>}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Row className='mt-5 mb-5'>
                                <Col lg={6}>
                                    <h3><strong>{name}</strong></h3>
                                    <Row>
                                        <Col>
                                            <p>{gender} </p>
                                        </Col>
                                        <Col>
                                            <p>{age}</p>
                                        </Col>
                                    </Row>
                                    <Input
                                        type="text"
                                    />
                                    <div className='mt-2' style={{ textAlign: 'left' }}>
                                        {describe.map((item, index) => {
                                            return <small key={index}>{item}&nbsp;&nbsp;&nbsp;</small>
                                        }
                                        )}
                                    </div>
                                    <div className='mt-2' style={{ textAlign: 'left' }}>
                                        {identify.map((item, index) => {
                                            return <small key={index}>{item}&nbsp;&nbsp;&nbsp;</small>
                                        }
                                        )}
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <FontAwesomeIcon icon={faFaceSmile} style={{ fontSize: '10em' }} color='#bddbd1' />
                                    {/* <i className='las la-grin' ></i> */}
                                </Col>
                            </Row>
                            <hr></hr>
                            <div className='mt-5 mb-5'>
                                <h3 style={{ textAlign: 'left', color: '#3d997a' }}><strong>About me</strong></h3>
                                <p >{description}</p>

                            </div>
                            <hr></hr>
                            <div className='mt-5 mb-5'>
                                <h3 style={{ textAlign: 'left', color: '#3d997a' }}><strong>Preferred location</strong></h3>
                                <p><FontAwesomeIcon icon={faLocationDot} />&nbsp;{address}</p>
                                <div className='w-100'>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h3 style={{ textAlign: 'left', color: '#3d997a' }}><strong>Best Matches</strong></h3>
                    <div className='dashboard_match'>
                        {matching_names.map((matching_name,index) => (
                            <Card style={{ width: '22em', height: '22em' }} className='m-3'>
                                <CardHeader>
                                    <img className="card-img-top img-fluid w-100" src={`assets/images/savedrooms/${index % 4}.jpeg`} alt="Card cap" style={{ height: '150px' }} />
                                </CardHeader>
                                <CardBody>
                                    <h4 className='m-2'>{matching_name.name}</h4>
                                    <div className='d-flex justify-content-between m-1'>
                                        <h6 className="card-title mb-2 text-black justify-content-center align-content-left">{kind} room</h6>
                                        <h6 className="card-title mb-2 text-black justify-content-center align-content-left"><FontAwesomeIcon icon={faMaximize} /> L</h6>
                                        <h6 className="card-title mb-2 text-black justify-content-center align-content-left"><FontAwesomeIcon icon={faBath} /> {size.bathroom}</h6>
                                        <h6 className="card-title mb-2 text-black justify-content-center align-content-left"><FontAwesomeIcon icon={faBed} /> {size.bedroom}</h6>
                                        <h6 className="card-title mb-2 text-black justify-content-center align-content-left"><FontAwesomeIcon icon={faUsers} /> {size.flatmates}</h6>
                                    </div>
                                    <div className='m-3'><h6>available {move_date.split("T")[0]}</h6></div>
                                    <div className='m-3'><h6 style={{ color: '#3d997a', fontWeight: 'bold' }}>${matching_name.cost}/wk</h6></div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="d-flex justify-content-center m-5">
                    <CDBBtn
                        color="success"
                        className="float-start"
                        circle={false}
                        outline
                        style={{ width: 150 }}
                        block
                        onClick={() => window.location.href = '/'}
                    >
                        Go to homepage!
                    </CDBBtn>
                </div>
            </Container>
        </div>

    )
}
