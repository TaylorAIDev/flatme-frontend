import React, { useState } from 'react'
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

export default function Board_Map(props) {
    const [isChecked, setIsChecked] = useState(true);
    const handleToggle = () => setIsChecked(!isChecked);
    const mapStyles = {
        width: '100%',
        height: '100%',
    };


    return (
        <div>
            <div style={{ height: '20em' }}>
                <div id="gmaps-markers" className="gmaps" style={{ position: "relative" }}>
                    {/* <GoogleMap
                        google={props.google}
                        zoom={5}
                        style={mapStyles}
                        initialCenter={{ lat: -40.9006, lng: 174.8860 }}
                    >
                        <Marker position={{ lat: -36.8485, lng: 174.7633 }} />
                        <Marker position={{ lat: -41.2865, lng: 174.7762 }} />
                        <Marker position={{ lat: -37.7870, lng: 175.2793 }} />
                        <Marker position={{ lat: -39.6385, lng: 176.8493 }} />
                        <Marker position={{ lat: -45.0312, lng: 168.6626 }} />
                    </GoogleMap> */}
                </div>
            </div>
        </div>
    )
}

// export default (
//     GoogleApiWrapper({
//         apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
//         // LoadingContainer: LoadingContainer,
//         v: "3",
//     })(Board_Map)
// )