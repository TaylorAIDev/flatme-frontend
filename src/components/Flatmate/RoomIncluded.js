import React from 'react'
import { useState } from 'react';
import { faTv, faBed, faMugSaucer, faToilet, faKey, faSuitcase, faShirt, faInbox, faCubes, faSun, faSnowflake, faBroom, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'reactstrap';
import Assessary from './Assessary';
import '../../App.css'

function RoomIncluded(props) {
  const { setRoomIncluded } = props;
  const [accessaryData, setAccessaryData] = useState([
    {
      "icon": faBed,
      "label":"Bed in room",
      "isChecked": false,
    },
    {
      "icon": faSuitcase,
      "label":"Bedside table in room",
      "isChecked": false,
    },
    {
      "icon": faShirt,
      "label":"Wardrobe in room",
      "isChecked": false,
    },
    {
      "icon": faInbox,
      "label":"Drawers in room",
      "isChecked": false,
    },
    {
      "icon": faCubes,
      "label":"Desk in room",
      "isChecked": false,
    },
    {
      "icon": faSun,
      "label":"Lamp in room",
      "isChecked": false,
    },
    {
      "icon": faSnowflake,
      "label":"Fridge in room",
      "isChecked": false,
    },
    {
      "icon": faMugSaucer,
      "label":"Kitchenette in room",
      "isChecked": false,
    },
    {
      "icon": faToilet,
      "label":"Room has ensuite bathroom",
      "isChecked": false,
    },
    {
      "icon": faSprayCanSparkles,
      "label":"Heat Pump or Air Con in room",
      "isChecked": false,
    },
    {
      "icon": faTv,
      "label":"TV in room",
      "isChecked": false,
    },
    {
      "icon": faBroom,
      "label":"Balcony in room",
      "isChecked": false,
    },
    {
      "icon": faKey,
      "label":"Door lock",
      "isChecked": false,
    },
    
  ]);

  const setCheckItem = (index) => {
    accessaryData[index].isChecked = !accessaryData[index].isChecked

    setAccessaryData([
      ...accessaryData
    ])
    setRoomIncluded([]);
    accessaryData.map(item => {
      if (item.isChecked === true) {
        setRoomIncluded(prev =>
          [...prev, item.label]
        );
      }
    })
  }
  return (
    <div className='zoomout'>
      <h4 className='position'><strong>What amenities and furnishings are included in the room?</strong></h4>
      <Row style={{justifyContent:'center'}}>
        {accessaryData.map((item, index) => (
          <Assessary key={index} item={item} changeCheckItem={() => setCheckItem(index)} />
        ))}
      </Row>
    </div>
  )
}
export default RoomIncluded