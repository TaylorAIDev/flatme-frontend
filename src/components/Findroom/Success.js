import React from 'react'
import '../../App.css'

export default function Success() {
    return (
        <div className='zoomout'>
            <div className="text-center bg-blue">
                <div className="avatar-md mt-5 mb-4 mx-auto">
                    <div className="avatar-title bg-light text-success display-1 rounded-circle">
                        <i className="ri-checkbox-circle-fill"></i>
                    </div>
                </div>
                <h3>Well Done !</h3>
                <p className="text-muted">
                    Let's go and take a look at your shiny new flatmate listing
                </p>
            </div>
        </div>
    )
}