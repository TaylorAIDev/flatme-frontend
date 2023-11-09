import React, { useState, useEffect } from 'react';
import { Input, Label } from 'reactstrap'
import Flatpickr from "react-flatpickr";
import '../../App.css'

const Available = (props) => {
    const { handleAvailableInputChange } = props;

    const [availableData, setAvailableData] = useState({
        immediately: 'true',
        from_date: null,
        minimum_term: 'true',
        minimum_month: 1,
    });

    useEffect(() => {
        handleAvailableInputChange(availableData);
        return () => {

        }
    }, [availableData]);

    const handleClickAvailable = (data) => {
        setAvailableData({
            ...availableData,
            immediately: data
        })
    }

    const handleClickMinimumTerm = (minimum) => {
        setAvailableData({
            ...availableData,
            minimum_term: minimum
        })
    }


    return (
        <div className="zoomout">
            <h2>When do you want to move in and for how long?</h2>
            <div>
                <div className="form-check mb-2">
                    <Input
                        className="form-check-input"
                        type="radio"
                        name="immediately"
                        id="radio1"
                        checked={availableData.immediately}
                        onChange={() => handleClickAvailable(true)}
                    />
                    <Label className="form-check-label" for="radio1">
                        Available immediately
                    </Label>
                </div>

                <div className="form-check">
                    <Input
                        className="form-check-input"
                        type="radio"
                        name="from_date"
                        id="radio2"
                        checked={!availableData.immediately}
                        onChange={() => handleClickAvailable(false)}
                    />
                    <Label className="form-check-label" for="radio2">
                        Available from
                    </Label>
                </div>
                {!availableData.immediately && (
                    <div className="mt-3">
                        <Flatpickr
                            className="form-control"
                            options={{
                                altInput: true,
                                altFormat: "F j, Y",
                                dateFormat: "Y-m-d",
                            }}
                            value={availableData.from_date}
                            onChange={(val) => setAvailableData({
                                ...availableData,
                                from_date: val[0]
                            })}
                        />
                    </div>
                )}

                <hr></hr>
            </div>

            <div>
                <div className="form-check mb-2">
                    <Input
                        className="form-check-input"
                        type="radio"
                        name="radio3"
                        id="radio3"
                        checked={availableData.minimum_term}
                        onChange={() => handleClickMinimumTerm(true)}
                    />
                    <Label className="form-check-label" for="radio3">
                        No minimum term
                    </Label>
                </div>

                <div className="form-check">
                    <Input
                        className="form-check-input"
                        type="radio"
                        name="radio4"
                        id="radio4"
                        checked={!availableData.minimum_term}
                        onChange={() => handleClickMinimumTerm(false)}
                    />
                    <Label className="form-check-label" for="radio4">
                        Flatmate must stay at least...
                    </Label>
                </div>
                {!availableData.minimum_term && (
                    <div>
                        <div className="input-step step-success">
                            <button
                                type="button"
                                className="minus"
                                disabled={availableData.minimum_month === 1}
                                onClick={() => {
                                    setAvailableData(prevState => {
                                        return {
                                            ...prevState,
                                            minimum_month: prevState.minimum_month - 1
                                        }
                                    })
                                }}
                            >
                                –
                            </button>
                            <Input
                                type="number"
                                className="product-quantity"
                                value={availableData.minimum_month}
                                min="1"
                                max="100"
                                readOnly
                            />
                            <button
                                type="button"
                                className="plus"
                                disabled={availableData.minimum_month === 12}
                                onClick={() => {
                                    setAvailableData(prevState => {
                                        return {
                                            ...prevState,
                                            minimum_month: prevState.minimum_month + 1
                                        }
                                    })
                                }}
                            >
                                +
                            </button>
                        </div>
                        months
                    </div>
                )}
                <hr></hr>
            </div>
        </div>
    );
}
export default Available