import React from 'react'
import { Input } from "reactstrap";
import '../../App.css'

function PreparePay(props) {
    const {setPreparePay} = props;
    return (
        <div className='zoomout' >
            <h2>How much are you asking for the room?</h2>
            <div className='position d-flex justify-content-center'><h3>Rent $</h3>
                <Input
                    type="number"
                    name="rent"
                    min="0"
                    style={{width: 100}}
                    className="mx-2"
                    onChange={(e) => { setPreparePay(e.target.value) }} />
                <h3>per week</h3></div>
        </div>
    )
}
export default PreparePay