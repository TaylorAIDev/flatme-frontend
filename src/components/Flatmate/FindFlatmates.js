import React, { useState } from "react";
import { CDBStepper, CDBStep, CDBBtn } from "cdbreact";
import Location from "./Location";
import SignIn from './SignIn'
import Kind from './Kind'
import RoomSize from './RoomSize'
import RentCost from './RentCost'
import Available from './Available'
import Suitable from './Suitable'
import Register from "./Register";
import Provided from "./Provided";
import RoomIncluded from "./RoomIncluded";
import AddPhoto from "./AddPhoto";
import Description from "./Description";
import axios from "axios";
import Password from "./Password";
import Signup from "./Signup";
import { API_URL } from "../Main/ApiUrl";
import '../../App.css';

function FindFlatmates() {
  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   axios.post(`${API_URL}token/verify`, { token: accessToken })
  //     .then(res => {
  //       if (res.status === 200) {
  //         setActive(4);
  //       }
  //       else {
  //         setActive(1);
  //       }
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  const [active, setActive] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regist, setRegist] = useState({});
  const [address, setAddress] = useState('');
  const [size, setSize] = useState({});
  const [kind, setKind] = useState('');
  const [roomsize, setRoomsize] = useState('');
  const [rent, setRent] = useState(0);
  const [available, setAvailable] = useState({});
  const [flat, setFlat] = useState([]);
  const [suitable, setSuitable] = useState({});
  const [provided, setProvided] = useState([]);
  const [roomIncluded, setRoomIncluded] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [description, setDescription] = useState({});

  const emailHandler = async () => {
    if (email === '') {
      alert('Please input your email!')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}verifyEmail/`, { email });
        console.log(result)
        if (result.status === 200) {
          setActive(2);
        }
      } catch (error) {
        setActive(3);
      }
    }
  }

  const passwordHandler = async () => {
    try {
      const result = await axios.post(`${API_URL}verifyPassword/`, { email, password });
      console.log(result)
      if (result.status === 200) {
        localStorage.setItem('email', email);
        try {
          const getToken = await axios.post(`${API_URL}token`, { username: email, password });
          if (getToken.status === 200) {
            console.log(getToken.data);
            const { refresh, access } = getToken.data;
            localStorage.setItem('refreshToken', refresh);
            localStorage.setItem('accessToken', access);
            setActive(4);
          }
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      setActive(2);
    }
  }

  const registHandler = async () => {
    if (regist.firstname === '') {
      alert('Please input your infomation!')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}signup/`, { email, firstname: regist.firstname, lastname: regist.lastname, password: regist.newPassword });
        console.log(result)
        if (result.status === 201) {
          localStorage.setItem('email', email);
          setActive(4);
        }
      } catch (error) {
        setActive(3);
      }
    }
  }

  const addressHandler = async () => {
    if (address === '') {
      alert('Please input your flat location!')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}address/`, { email, address });
        console.log(result)
        if (result.status === 200) {
          setActive(5);
        }
      } catch (error) {
        setActive(4);
      }
    }
  }

  const kindHandler = async () => {
    if (kind === '') {
      alert('Please check kind of room!')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}kind/`, { email, kind })
        console.log(result)
        if (result.status === 200) {
          setActive(6);
        }
      } catch (error) {
        setActive(5)
      }
    }
  }

  const roomsizeHandler = async () => {
    if (roomsize === '') {
      alert('Please check size of room!')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}roomsize/`, { email, roomsize })
        console.log(result)
        if (result.status === 200) {
          setActive(7);
        }
      } catch (error) {
        setActive(6);
      }
    }
  }

  const rentHandler = async () => {
    if (rent === 0) {
      alert('Please input rent cost!')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}rent/`, { email, rent });
        console.log(result);
        if (result.status === 200) {
          setActive(8)
        }
      } catch (error) {
        setActive(7)
      }
    }
  }

  const availableHandler = async () => {
    try {
      const available_str = JSON.stringify(available);
      console.log(available_str)
      const result = await axios.post(`${API_URL}available/`, { email, available: available_str });
      console.log(result)
      if (result.status === 200) {
        setActive(9);
      }
    } catch (error) {
      setActive(8);
    }
  }

  const suitableHandler = async () => {
    try {
      const suitableJsondata = {
        'couples': suitable[0],
        'children': suitable[1],
        'smokers': suitable[2],
        'pets': suitable[3],
        'room': suitable[4],

      }
      const suitableStringdata = JSON.stringify(suitableJsondata);
      const result = await axios.post(`${API_URL}suitable/`, { email, suitable: suitableStringdata })
      console.log(result)
      if (result.status === 200) {
        setActive(10);
      }
    } catch (error) {
      setActive(9);
    }
  }

  const elseLivingHandler = async () => {
      try {
        const flatJsondata = { 'data': flat };
        const flatStringdata = JSON.stringify(flatJsondata);
        const result = await axios.post(`${API_URL}flat/`, { email, flat: flatStringdata })
        console.log(result)
        if (result.status === 200) {
          setActive(11);
        }
      } catch (error) {
        setActive(10);
      }
  }

  const providedHandler = async () => {
    try {
      const providedJsonData = JSON.stringify(provided);
      const result = await axios.post(`${API_URL}provided/`, { email, provided: providedJsonData });
      console.log(result);
      if (result.status === 200) {
        setActive(12)
      }
    } catch (error) {
      setActive(11)
    }
  }

  const roomIncludedHandler = async () => {
    try {
      const roomIncludedStringData = JSON.stringify(roomIncluded);
      const result = await axios.post(`${API_URL}roomIncluded/`, { email, roomIncluded: roomIncludedStringData });
      console.log(result);
      if (result.status === 200) {
        setActive(13)
      }
    } catch (error) {
      setActive(12)
    }
  }

  const photoHandler = async () => {
    let formData = new FormData()
    photo.forEach(ph => {
      formData.append("images", ph.file)
    })
    console.log(photo)
    formData.append("email", email)
    try {
      const result = await axios.post(`${API_URL}image/`, formData);
      console.log(result);
      if (result.status === 200) {
        setActive(14)
      }
    } catch (error) {
      setActive(13)
    }
  }

  const descriptionHandler = async () => {
    try {
      const descriptionStringData = JSON.stringify(description);
      console.log(descriptionStringData)
      const result = await axios.post(`${API_URL}description/`, { email, description: descriptionStringData });
      console.log(result);
      if (result.status === 200) {
        window.location.href = '/room';
      }
    } catch (error) {
      setActive(14)
    }
  }

  const handleNextClick = () => {
    if (active === 1) {
      emailHandler();
    }
    if (active === 2) {
      passwordHandler();
    }
    if (active === 3) {
      registHandler();
    }
    if (active === 4) {
      setAddress('');
      addressHandler();
    }
    if (active === 5) {
      setKind('');
      kindHandler();
    }
    if (active === 6) {
      setRoomsize('');
      roomsizeHandler();
    }
    if (active === 7) {
      setRent(0);
      rentHandler();
    }
    if (active === 8) {
      availableHandler();
    }
    if (active === 9) {
      suitableHandler();
    }
    if (active === 10) {
      elseLivingHandler();
    }
    if (active === 11) {
      providedHandler();
    }
    if (active === 12) {
      roomIncludedHandler();
    }
    if (active === 13) {
      photoHandler();
    }
    if (active === 14) {
      descriptionHandler();
    }
  }

  const handleRegInputChange = (data) => {
    setRegist(data);
  }

  const handleAvailableInputChange = (data) => {
    setAvailable(data);
  }

  const handlePrevClick = a => {
    if (a === 3) { a = 2; }
    if (a === 4) { window.location.href = '/' }
    a--;
    if (a <= 0) { a = 1; }
    setActive(a);
  }

  return (
    <div style={{ backgroundColor: '#f2faf7' }}>
      <CDBStepper>
        <CDBStep
          id={1}
          icon="check"
          name="Basic Information"
          active={active}
          component={<SignIn email={email} setEmail={setEmail} />}
        />
        <CDBStep
          id={2}
          icon="check"
          name="Basic Information"
          active={active}
          component={<Password password={password} setPassword={setPassword} />}
        />
        <CDBStep
          id={3}
          icon="check"
          name="Finish"
          active={active}
          component={<Signup handleRegInputChange={handleRegInputChange} />}
        />
        <CDBStep
          id={4}
          icon="check"
          name="Personal Data"
          active={active}
          component={<Location address={address} setAddress={setAddress} />}
        />
        <CDBStep
          id={5}
          icon="check"
          name="Finish"
          active={active}
          component={<Kind kind={kind} setKind={setKind} />}
        />
        <CDBStep
          id={6}
          icon="check"
          name="Finish"
          active={active}
          component={<RoomSize roomsize={roomsize} setRoomsize={setRoomsize} />}
        />
        <CDBStep
          id={7}
          icon="check"
          name="Finish"
          active={active}
          component={<RentCost rent={rent} setRent={setRent} />}
        />
        <CDBStep
          id={8}
          icon="check"
          name="Finish"
          active={active}
          component={<Available handleAvailableInputChange={handleAvailableInputChange} />}
        />
        <CDBStep
          id={9}
          icon="check"
          name="Finish"
          active={active}
          component={<Suitable suitable={suitable} setSuitable={setSuitable} />}
        />
        <CDBStep
          id={10}
          icon="check"
          name="Finish"
          active={active}
          component={<Register setFlat={(data) => { setFlat([...data]) }} />}
        />
        <CDBStep
          id={11}
          icon="check"
          name="Finish"
          active={active}
          component={<Provided provided={provided} setProvided={setProvided} />}
        />
        <CDBStep
          id={12}
          icon="check"
          name="Finish"
          active={active}
          component={<RoomIncluded roomIncluded={roomIncluded} setRoomIncluded={setRoomIncluded} />}
        />
        <CDBStep
          id={13}
          icon="check"
          name="Finish"
          active={active}
          component={<AddPhoto photo={photo} setPhoto={setPhoto} />}
        />
        <CDBStep
          id={14}
          icon="check"
          name="Finish"
          active={active}
          component={<Description description={description} setDescription={setDescription} />}
        />
      </CDBStepper>
      <div className="mt-2 mb-2 d-flex justify-content-around">
        <CDBBtn
          color="secondary"
          flat
          className="float-start"
          circle={false}
          outline
          style={{ width: 100 }}
          block
          onClick={() => handlePrevClick(active)}
        >
          Previous
        </CDBBtn>
        <CDBBtn
          color="secondary"
          circle={false}
          flat
          block
          className="float-end"
          style={{ width: 100 }}
          onClick={() => handleNextClick(active)}
        >
          Next
        </CDBBtn>
      </div>

      <div className="d-flex justify-content-center m-5">
        <CDBBtn
          color="success"
          className="float-start"
          circle={false}
          outline
          style={{ width: 150 }}
          block
          onClick={() => window.location.href = '/'}
        >
          Go to homepage!
        </CDBBtn>
      </div>
    </div>
  );
};

export default FindFlatmates;

// const FlexColumnContainer = styled('div')`
//   padding: 5px;
//   display: flex;
//   flex-direction: column;
//   width: ${props => props.width};
//   justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
//   align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
//   box-sizing: border-box;
// `;
// const StepContainer = styled('div')`
//   width: 100%;
//   height: 100%;
// `;