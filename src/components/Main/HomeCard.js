import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

function HomeCard(props) {
    return (
        <div className='d-flex justify-content-end m-5'>
                <Card style={{ width: '20em', height: '20em' }}>
                    <CardHeader>
                        <img className="card-img-top img-fluid w-100" src={`${props.img}`} alt="Card cap" style={{ height: '100px' }} />
                    </CardHeader>
                    <CardBody>
                        <h1 className="card-title mb-2 text-black justify-content-center align-content-center">Find a {props.name}</h1>
                    </CardBody>
                    <CardFooter>
                        <Link to={`/${props.name}`} className="btn btn-primary w-100">Find a {props.name}</Link>
                    </CardFooter>
                </Card>
        </div>
    )
}

export default HomeCard;