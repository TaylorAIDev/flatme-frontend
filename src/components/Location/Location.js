import React from "react";
import { Circle, GoogleMap, Marker, useLoadScript, withGoogleMap, } from "@react-google-maps/api";
import LocationSearchAutoComplete from "./LocationSearchAutoComplete";
// import LocationWrapper from "./Location.styles";
// import { GOOGLE_MAP_API_KEY } from "../../../../env-config";
// import Loader from "@iso/components/utility/loader";

// const apiKey = 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA'

const Location = (props) => {
    const zoom = 10.5;
    const showPlace = (place) => {
        props.onPlaceChange(place);
    }
    const circle = {
        radius: 12000, options: {
            strokeColor: "#0071AA",
        },
    }

    const defaultCenter = {
        lat: 42.2677899, lng: -71.01325899999999,
    }

    const { address, center, onReset } = props;

    const GoogleMapsComponent = (props) => {
        return (<GoogleMap
            zoom={zoom}
            center={center.lat ? center : defaultCenter}
            mapContainerStyle={{ height: "400px", margin: "auto" }}
        >
            {center.lat && <Marker position={center}></Marker>}
            {center.lat && (<Circle
                defaultCenter={center}
                radius={circle.radius}
                options={circle.options}
            />)}
        </GoogleMap>);
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA',
        libraries: ['places']
    });

    // if (!isLoaded) return (<Loader />)

    return (
    <>
        <LocationSearchAutoComplete
            address={address}
            onPlaceChanged={showPlace}
            onReset={onReset}
        />
        <div className="animated fadeIn">
            <GoogleMapsComponent
                // ref={this.mapRef}
                key="map"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    </>
    );
}

export default Location;
