import React, { useState, useMemo } from 'react'
import { Row, Input, Label } from 'reactstrap'
import countryList from 'react-select-country-list'
import '../../App.css'

function Country(props) {
    const { setCountry } = props;
    const [check, setCheck] = useState('I call New Zealand home');
    const options = useMemo(() => countryList().getData(), [])

    const onRadioChange = (e) => {
        console.log(e.target.value);
        setCheck(e.target.value);
        setCountry(e.target.value)
    }
    const [selected, setSelected] = useState('')
    const handleSelectedChange = (e) => {
        setSelected(e.target.value);
        setCountry("I am a traveller from " + e.target.value)
    }
    return (
        <div className='zoomout'>
            <h2>Where are you from?</h2>
            <Row className='m-3'>
                <div className='m-3' style={{ fontSize: "1.5em" }}>
                    <div className="form-check mb-2">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="radio1"
                            value="I call New Zealand home"
                            checked={check === "I call New Zealand home"}
                            id="radio1"
                            onChange={onRadioChange}
                        />
                        <Label className="form-check-label" for="radio1">
                            I am from New Zealand home
                        </Label>
                    </div>
                    <div className="form-check mb-2">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="radio2"
                            checked={check === "radio2"}
                            value="radio2"
                            id="radio2"
                            onChange={onRadioChange}
                        />
                        <Label className="form-check-label" for="radio2">
                            I am a traveller from...
                        </Label>
                        {check !== "radio2" ? <div></div> :
                            <div className="mt-2 mb-2 form-floating date-workin">
                                <div className="form-floating">
                                    <select
                                        className="form-select"
                                        id="floatingSelect"
                                        aria-label="Floating label select example"
                                        value={selected}
                                        onChange={handleSelectedChange}>
                                        <option >Choose...</option>
                                        {
                                            options.map((cItem, index) => (
                                                <option key={index} value={cItem.label}>{cItem.label}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Row>
        </div>
    )
}
export default Country