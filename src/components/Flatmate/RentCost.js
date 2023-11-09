import React, { useState } from 'react'
import { CDBBtnGrp, CDBBtn, CDBContainer } from "cdbreact";
import { Input } from 'reactstrap';
import '../../App.css'

function RentCost(props) {
    const [rentVal, setRentVal] = useState(props.rent)

    const handleChange = async e => {
        await props.setRent(e.target.value)
        await setRentVal(e.target.value)
    }
    console.log(props)
    return (
        <div className='zoomout' >
            <h2>How much are you asking for the room?</h2>
            <div className='position d-flex justify-content-center'>
                <h3>Rent $</h3>
                    <Input
                    type="number"
                    name="rent"
                    min="0"
                    style={{width: 100}}
                    className="mx-2"
                    onChange={handleChange} />

                <h3>per week</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CDBContainer style={{ display: 'contents' }}>
                    <CDBBtnGrp size="sm">
                        <CDBBtn color="primary">One week rent</CDBBtn>
                        <CDBBtn color="secondary">Two weeks rent</CDBBtn>
                        <CDBBtn color="success">Three weeks rent</CDBBtn>
                        <CDBBtn color="danger">Four weeks rent</CDBBtn>
                        <CDBBtn color="dark">No Bond</CDBBtn>
                    </CDBBtnGrp>
                </CDBContainer>
            </div>
        </div>
    )
}
export default RentCost