import React, { useState, useEffect } from 'react'
import { Row, Input, Label } from 'reactstrap'
import Flatpickr from "react-flatpickr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'

export default function GetStart(props) {
    const { handleGetStartInputChange } = props;
    const [isGenderInput, setIsGenderInput] = useState(false)
    const [getStartData, setGetStartData] = useState({
        name: '',
        gender: 'male',
        birthday: null
    });

    useEffect(() => {
        handleGetStartInputChange(getStartData);
        return () => {
        }
    }, [getStartData]);

    const handleChange = (e) => {
        setGetStartData({
            ...getStartData,
            [e.target.name]: e.target.value
        })
    }

    const handleRadioChange = async (e) => {
        if (e.target.name === 'radio3') {
            setGetStartData({
                ...getStartData,
                gender: ''
            })
            setIsGenderInput(true)
        } else {
            setIsGenderInput(false)
            setGetStartData({
                ...getStartData,
                gender: e.target.value
            })
        }
    }

    return (
        <div className='zoomout'>
            <h2>Let's Get you Started</h2>
            <div className="form-floating m-3">
                <Input
                    type="text"
                    className="form-control"
                    name='name'
                    value={getStartData.name}
                    id="firstnamefloatingInput"
                    placeholder="Enter your firstname"
                    onChange={handleChange}
                />
                <Label htmlFor="firstnamefloatingInput">Preferred Name</Label>
            </div>
            <Row className='m-3'>
                This is the name that will appear on your listing. It can be different from your real name
            </Row>
            <Row className='m-3'>
                <Row>
                    Gender
                </Row>
                <div className='m-3'>
                    <div className="form-check mb-2">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="radio1"
                            value="male"
                            checked={getStartData.gender === "male"}
                            id="radio1"
                            onChange={handleRadioChange}
                        />
                        <Label className="form-check-label" for="radio1">Male</Label>
                    </div>
                    <div className="form-check mb-2">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="radio2"
                            checked={getStartData.gender === "female"}
                            value="female"
                            id="radio2"
                            onChange={handleRadioChange}
                        />
                        <Label className="form-check-label" for="radio2">Female</Label>
                    </div>
                    <div className="form-check mb-2">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="radio3"
                            value="radio3"
                            checked={isGenderInput}
                            id="radio3"
                            onChange={handleRadioChange}
                        />
                        {isGenderInput && <Input name='gender' onChange={handleChange} />}
                    </div>
                </div>
            </Row>
            <Row className='m-3'>
                <div>Birthday</div>
                <div className="mt-2 mb-2 form-floating">
                    <Flatpickr
                        className="form-control"
                        options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            dateFormat: "Y",
                        }}
                        value={getStartData.birthday}
                        onChange={(val) => setGetStartData({
                            ...getStartData,
                            birthday: val[0]
                        })}

                    />
                </div>
                <div><FontAwesomeIcon icon={faEye} />We will only show your age in years, not your actual birthdate.</div>
            </Row>
        </div>
    )
}