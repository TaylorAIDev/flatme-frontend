import React, { useState } from 'react'
import { GoogleMap, Marker } from "@react-google-maps/api";
import Form from "react-bootstrap/Form";
import { Row, Col, Input } from 'reactstrap';
import '../../App.css'

export default function Location(props) {
    const [isChecked, setIsChecked] = useState(true);
    const handleToggle = (e) => {
        setIsChecked(!isChecked);
    }
    const mapStyles = {
        width: '100%',
        height: '100%',
    };
    // const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

    // const coordinatesHandler = (data) => {
    //     const geocodeAddress = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `https://maps.googleapis.com/maps/api/geocode/json?address=${data}&key=YOUR_GOOGLE_MAPS_API_KEY`
    //             );
    //             const { lat, lng } = response.data.results[0].geometry.location;
    //             setCoordinates({ lat, lng });
    //             console.log({ lat, lng });
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     };
    //     geocodeAddress();
    // };

    return (
        <div className='zoomout'>
            <h2>Where is your flat located?</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form className="mt-3" onSubmit={(e) => { e.preventDefault(); }}>
                    <Input
                        type="search"
                        className="mr-sm-2 locaion_input"
                        placeholder='Please enter your flat location.'
                        onChange={(e) => {
                            props.setAddress(e.target.value)
                        }} />
                </Form>
            </div>


            <div>
                <div id="gmaps-markers" className="gmaps" style={{ position: "relative" }}>
                    {/* <GoogleMap
                        google={props.google}
                        zoom={5}
                        style={mapStyles}
                        initialCenter={{ lat: -40.9006, lng: 174.8860 }}
                    >
                        <Marker position={{ lat: -36.8485, lng: 174.7633 }} />
                        <Marker position={{ lat: -41.2865, lng: 174.7762 }} />
                        <Marker position={{ lat: -37.7870 , lng: 175.2793 }} />
                        <Marker position={{ lat: -39.6385 , lng: 176.8493 }} />
                        <Marker position={{ lat: -45.0312 , lng: 168.6626 }} />
                    </GoogleMap> */}
                </div>
            </div>
            <div>
                <Form>
                    <Row>
                        <Col lg={7} md={7} sm={7}>
                            <span className="me-2">{isChecked ? "Exact Address" : "Show approximate location"}</span>
                        </Col>
                        <Col lg={2} md={2} sm={2}>
                            <Form.Check
                                type="switch"
                                id="toggle-switch"
                                label=""
                                checked={isChecked}
                                onChange={handleToggle}
                            />
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

// export default (
//     GoogleApiWrapper({
//         apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
//         // LoadingContainer: LoadingContainer,
//         v: "3",
//     })(Location)
// )