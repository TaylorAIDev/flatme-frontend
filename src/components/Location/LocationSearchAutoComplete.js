import React, {useEffect, useState} from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import {CloseOutlined} from "@ant-design/icons";
import { Input } from "reactstrap";
// import Input from "@iso/components/uielements/input";
// import {FaMapPin} from "react-icons/fa";

const LocationSearchAutoComplete = (props) => {
    const [address, setAddress] = useState("");

    let placesService;
    if (process.browser) {
        placesService = new window.google.maps.places.PlacesService(
            document.createElement("div")
        );
    }

    const { address: propsAddress, placeholder } = props;
    useEffect(() => {
        setAddress(propsAddress);
    }, [propsAddress])

    const handleChange = (addr) => {
        setAddress(addr)
    };

    const handleSelect = (addr, placeId) => {
        setAddress(addr)
        const request = {
            placeId: placeId,
            fields: [
                "name",
                "geometry",
                "address_components",
                "formatted_address",
                "icon",
                "id",
                "name",
                "place_id",
                "reference",
                "scope",
                "types",
                "url",
                "utc_offset",
                "vicinity",
            ],
        };

        placesService.getDetails(request, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                props.onPlaceChanged(place);
            }
        });
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                <div className="autocomplete-container">
                    <div className="place-input-wrapper">
                        <Input
                            {...getInputProps({
                                // name: name ? name : "address",
                                placeholder: placeholder ? placeholder : "Search for address...",
                            })}
                        />
                        {/* <CloseOutlined/> */}
                    </div>
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion, index) => {
                            const className = suggestion.active
                                ? "suggestion-item active"
                                : "suggestion-item";

                            return (
                                <div
                                    key={index}
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                    })}
                                >
                                    {/* <FaMapPin/> */}
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
}

export default LocationSearchAutoComplete;
