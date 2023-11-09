import React, { useState } from 'react'
import { Row, Input, Label } from 'reactstrap'
import '../../App.css'

export default function Living(props) {
    const { setLiving } = props;
    const [check, setCheck] = useState('Prefer not to say');
    const onRadioChange = (e) => {
        setCheck(e.target.value);
        setLiving(e.target.value)
    }
    const [selected, setSelected] = useState('')
    const handleSelectedChange = (e) => {
        setSelected(e.target.value);
        setLiving("I work in " + e.target.value)
    }

    return (
        <div className='zoomout'>
            <h2>What do you do for a living?</h2>
            <Row className='m-3'>
                <div className='m-3' style={{ fontSize: "1.5em" }}>
                    <div className="form-check mb-2">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="radio1"
                            value="Prefer not to say"
                            checked={check === "Prefer not to say"}
                            id="radio1"
                            onChange={onRadioChange}
                        />
                        <Label className="form-check-label" for="radio1">
                            Prefer not to say
                        </Label>
                    </div>
                    <div className="form-check mb-2">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="radio2"
                            checked={check === "I work in"}
                            value="I work in"
                            id="radio2"
                            onChange={onRadioChange}
                        />
                        <Label className="form-check-label" for="radio2">
                            I work in
                        </Label>
                        {check !== "I work in" ? <div></div> :
                            <div className="mt-2 mb-2 form-floating date-workin">
                                <div className="form-floating">
                                    <select
                                        className="form-select"
                                        id="floatingSelect"
                                        aria-label="Floating label select example"
                                        value={selected}
                                        onChange={handleSelectedChange}>
                                        <option >Choose...</option>
                                        <option value="Accounting">Accounting</option>
                                        <option value="Administration">Administration</option>
                                        <option value="Architecture">Architecture</option>
                                        <option value="Automotive">Automotive</option>
                                        <option value="Banking">Banking</option>
                                        <option value="Communications">Communications</option>
                                        <option value="Community">Community Services</option>
                                        <option value="Construction">Construction</option>
                                        <option value="Education">Education</option>
                                        <option value="Electrical">Electrical</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Farming">Farming</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Fishing">Fishing</option>
                                        <option value="Forestry">Forestry</option>
                                        <option value="Government">Government</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Hospitality">Hospitality</option>
                                        <option value="HR">HR</option>
                                        <option value="IT">IT</option>
                                        <option value="Legal">Legal</option>
                                        <option value="Logistics">Logistics</option>
                                        <option value="Management">Management</option>
                                        <option value="Manufacturing">Manufacturing</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Media">Media</option>
                                        <option value="Military">Military</option>
                                        <option value="Police">Police</option>
                                        <option value="Publishing">Publishing</option>
                                        <option value="Real Estate">Real Estate</option>
                                        <option value="Recruitment">Recruitment</option>
                                        <option value="Retail">Retail</option>
                                        <option value="Sales">Sales</option>
                                        <option value="Science">Science</option>
                                        <option value="Support">Support</option>
                                        <option value="Tourism">Tourism</option>
                                        <option value="Trades">Trades</option>
                                        <option value="Transport">Transport</option>
                                    </select>
                                </div>
                            </div>}

                    </div>
                    <div className="form-check mb-2">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="radio3"
                            checked={check === "I am a student"}
                            value="I am a student"
                            id="radio3"
                            onChange={onRadioChange}
                        />
                        <Label className="form-check-label" for="radio3">
                            I am a student
                        </Label>
                    </div>
                    <div className="form-check mb-2">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="radio4"
                            checked={check === "I am between gigs at the moment"}
                            value="I am between gigs at the moment"
                            id="radio4"
                            onChange={onRadioChange}
                        />
                        <Label className="form-check-label" for="radio4">
                            I am between gigs at the moment.
                        </Label>
                    </div>
                </div>
            </Row>
        </div>
    )
}
