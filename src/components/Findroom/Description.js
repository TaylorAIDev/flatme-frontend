import React from 'react'
import { useState } from 'react';
import '../../App.css'

export default function Description(props) {
    const { setDescription } = props;
    const [text, setText] = useState({
    })
    const handleChange = (e) => {
        setText(e.target.value)
        setDescription(e.target.value);
    }
    return (
        <div className='zoomout'>
            <h2>Write a description of yourself</h2>
            <div className='m-5'>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea5"
                    name='flatmateText'
                    value={text.flatmateText}
                    rows="3"
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}
