import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'

export default function Assessary(props) {
    const middleStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20%',
        backgroundColor: '#e6e6e6',
        fontSize: '2rem',
        position: 'relative',
        width: '100px',
        height:'100px',
    }
    return (
        <>
            <div className='m-2 col-md-2 align-center accessary'>
                <div justify='center' style={{ ...middleStyle, backgroundColor: props.item.isChecked ? '#56c09d' : '#e6e6e6' }} onClick={props.changeCheckItem}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {props.item.isChecked && (
                            <FontAwesomeIcon icon={faCheck} style={{ position: 'absolute', top: 7, right: 7, fontSize: '1.3rem', color: 'white', zIndex: 1 }} />
                        )}
                        <FontAwesomeIcon icon={props.item.icon} style={{color: props.item.isChecked ? '#545050' : ''}} />
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>{props.item.label}</div>
            </div>
        </>
    )   
}   