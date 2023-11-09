import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheelchair,faSyringe,faCarrot, faLeaf, faRainbow, faSmoking, faCross, 
        faStarAndCrescent, faOm, faDharmachakra, faStarOfDavid, faKhanda, faToriiGate } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';
import Form from "react-bootstrap/Form";
import Assessary from '../Flatmate/Assessary'
import '../../App.css'

function Describe(props) {
    const { setDescribeItem } = props;
    const [accessaryData, setAccessaryData] = useState([
        {
            "icon": faSyringe,
            "label": "Vaccinated for COVID-19",
            "isChecked": false,
        },
        {
            "icon": faCarrot,
            "label": "Vegetarian",
            "isChecked": false,
        },
        {
            "icon": faLeaf,
            "label": "Vegan",
            "isChecked": false,
        },
        {
            "icon": faRainbow,
            "label": "Rainbow",
            "isChecked": false,
        },
        {
            "icon": faSmoking,
            "label": "Smoker",
            "isChecked": false,
        },
    ]);
    let describe = [];
    let identify = [];

    const setCheckItem = (index) => {
        accessaryData[index].isChecked = !accessaryData[index].isChecked
        setAccessaryData([
            ...accessaryData
        ])

        accessaryData.map(item => {
            if (item.isChecked === true) {
                describe.push(item.label)
                setDescribeItem(prevState => ({
                    ...prevState,
                    describe: [...describe]
                }));
            }
        })
    }

    const [accessaryData1, setAccessaryData1] = useState([
        {
            "icon": faCross,
            "label": "Christian",
            "isChecked": false,
        },
        {
            "icon": faStarAndCrescent,
            "label": "Muslim",
            "isChecked": false,
        },
        {
            "icon": faOm,
            "label": "Hindu",
            "isChecked": false,
        },
        {
            "icon": faDharmachakra,
            "label": "Buddhist",
            "isChecked": false,
        },
        {
            "icon": faStarOfDavid,
            "label": "Jewish",
            "isChecked": false,
        },
        {
            "icon": faKhanda,
            "label": "Sikh",
            "isChecked": false,
        },
        {
            "icon": faToriiGate,
            "label": "Shinto",
            "isChecked": false,
        },
    ]);
    const setCheckItem1 = (index) => {
        accessaryData1[index].isChecked = !accessaryData1[index].isChecked
        setAccessaryData1([
            ...accessaryData1
        ])

        accessaryData1.map(item => {
            if (item.isChecked === true) {
                identify.push(item.label)
                setDescribeItem(prevState => ({
                    ...prevState,
                    identify: [...identify]
                }));
            }
        })
    }

    const [checked, setChecked] = useState(true);
    const handleToggle = async () => {
        setChecked(!checked);
        setDescribeItem(prevState => ({
            ...prevState,
            accessibility: !checked
        }));
    }
    return (
        <div className='zoomout'>
            <h4 className='position'>Do any of these describe you?</h4>
            <div>
                <Row style={{ justifyContent: 'center' }}>
                    {accessaryData.map((item, index) => (
                        <Assessary key={index} item={item} changeCheckItem={() => setCheckItem(index)} />
                    ))}
                </Row>
            </div>
            <div className='m-5'>
                <Row>
                    <Col span={1} offset={1} sm={12} lg={2} align='center'>
                        <FontAwesomeIcon icon={faWheelchair} size='xl' color={checked ? 'red' : ''} />
                    </Col>
                    <Col sm={12} lg={8} align='center'>
                        <span className="me-2">{checked ? "I have accessibility" : "I don't have any accessibility requirements"}</span>
                    </Col>
                    <Col sm={12} lg={2} align='center'>
                        <Form.Check
                            type="switch"
                            id="toggle-switch"
                            label=""
                            checked={checked}
                            onChange={handleToggle}
                            className='size_number'
                        />
                    </Col>
                </Row>
            </div>
            <div >
                <h4 className='position'>Do you identify as any of these?</h4>
                <Row style={{ justifyContent: 'center' }}>
                    {accessaryData1.map((item, index) => (
                        <Assessary key={index} item={item} changeCheckItem={() => setCheckItem1(index)} />
                    ))}
                </Row>
            </div>
        </div>
    )
}
export default Describe