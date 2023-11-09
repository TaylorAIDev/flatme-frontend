import React from 'react'
import { useState } from 'react';
import { faTv, faGamepad, faWifi, faGauge, faSatelliteDish, faUtensils, faBath, faWater, faSnowflake, 
        faSink, faSprayCanSparkles, faSquareParking, faCar, faWarehouse, faWaterLadder, faHotTubPerson, faWheelchair, 
        faFeather, faBox, faLightbulb, faDiagnoses, faAward } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'reactstrap';
import Assessary from './Assessary';
import '../../App.css'

function Provided(props) {
  const {setProvided } = props;
  const [accessaryData, setAccessaryData] = useState([
    {
      "icon": faTv,
      "label": "TV",
      "isChecked": false,
    },
    {
      "icon": faGamepad,
      "label": "Game consoles",
      "isChecked": false,
    },
    {
      "icon": faFeather,
      "label": "Netflix",
      "isChecked": false,
    },
    {
      "icon": faBox,
      "label": "Lightbox",
      "isChecked": false,
    },
    {
      "icon": faLightbulb,
      "label": "Neon",
      "isChecked": false,
    },
    {
      "icon": faDiagnoses,
      "label": "Disney+",
      "isChecked": false,
    },
    {
      "icon": faAward,
      "label": "Amazon Prime Video",
      "isChecked": false,
    },
    {
      "icon": faSatelliteDish,
      "label": "Sky",
      "isChecked": false,
    },
    {
      "icon": faWifi,
      "label": "Internet/Wifi",
      "isChecked": false,
    },
    {
      "icon": faGauge,
      "label": "Fibre Broadband",
      "isChecked": false,
    },
    {
      "icon": faSnowflake,
      "label": "Fridge",
      "isChecked": false,
    },
    {
      "icon": faTv,
      "label": "Microwave",
      "isChecked": false,
    },
    {
      "icon": faUtensils,
      "label": "Dishwasher",
      "isChecked": false,
    },
    {
      "icon": faBath,
      "label": "Bath",
      "isChecked": false,
    },
    {
      "icon": faWater,
      "label": "Washing machine",
      "isChecked": false,
    },
    {
      "icon": faSink,
      "label": "Clothes drier",
      "isChecked": false,
    },
    {
      "icon": faSprayCanSparkles,
      "label": "Heat Pump or Air Con",
      "isChecked": false,
    },
    {
      "icon": faSquareParking,
      "label": "Street parking",
      "isChecked": false,
    },
    {
      "icon": faCar,
      "label": "Off-street parking",
      "isChecked": false,
    },
    {
      "icon": faWarehouse,
      "label": "Garage parking",
      "isChecked": false,
    },
    {
      "icon": faWaterLadder,
      "label": "Swimming pool",
      "isChecked": false,
    },
    {
      "icon": faHotTubPerson,
      "label": "Spa pool",
      "isChecked": false,
    },
    {
      "icon": faWheelchair,
      "label": "Accessible",
      "isChecked": false,
    },
  ]);

  const setCheckItem = (index) => {
    accessaryData[index].isChecked = !accessaryData[index].isChecked
    setAccessaryData([
      ...accessaryData
    ])
    setProvided([]);
    accessaryData.map(item => {
      if (item.isChecked === true) {
        setProvided(prev =>
          [...prev, item.label]
        );
      }
    })
  }
  return (
    <div className='zoomout'>
      <h2 className='position'>What shared amenities and furnishings does your flat provide?</h2>
      <Row style={{ justifyContent: 'center' }}>
        {accessaryData.map((item, index) => (
          <Assessary key={index} item={item} changeCheckItem={() => setCheckItem(index)} />
        ))}
      </Row>
    </div>
  )
}
export default Provided