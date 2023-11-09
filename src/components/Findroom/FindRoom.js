import React, { useState } from "react";
import axios from "axios";
import Password from "../Flatmate/Password";
import Signup from "../Flatmate/Signup";
import { CDBStepper, CDBStep, CDBBtn } from "cdbreact";
import SignIn from "../Flatmate/SignIn";
import Location from "../Flatmate/Location";
import GetStart from "./GetStart";
import Living from "./Living";
import Country from "./Country";
import AddPhoto from "../Flatmate/AddPhoto";
import Kind from "../Flatmate/Kind";
import RoomSize from "../Flatmate/RoomSize";
import Stay from "./Stay"
import Coming from "./Coming";
import Describe from "./Describe";
import PreparePay from "./PreparePay";
import Success from "./Success";
import Description from "./Description";
import { API_URL } from '../Main/ApiUrl';
import Size from "../Flatmate/Size";
import '../../App.css'

const FindRoom = () => {

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
  const [regist, setRegist] = useState({})
  const [getStart, setGetStart] = useState({})
  const [describeItem, setDescribeItem] = useState({
    describe: [],
    identify: [],
    accessibility: true
  })
  const [address, setAddress] = useState('');
  const [living, setLiving] = useState('');
  const [country, setCountry] = useState('');
  const [photo, setPhoto] = useState([])
  const [size, setSize] = useState({});
  const [preparePay, setPreparePay] = useState(0)
  const [kind, setKind] = useState('')
  const [roomsize, setRoomsize] = useState('')
  const [stay, setStay] = useState('')
  const [flat, setFlat] = useState([]);
  const [description, setDescription] = useState('')

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
            const { refresh, access } = getToken.data;
            localStorage.setItem('refreshToken', refresh);
            localStorage.setItem('accessToken', access);
            // window.location.href = '/dashboard';
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
  const getStartHandler = async () => {
    if (getStart.name === '' || getStart.birthday === null) {
      alert('Please input your persoal information!')
    }
    else {
      try {
        console.log(getStart);
        const getStartStringData = JSON.stringify(getStart);
        const result = await axios.post(`${API_URL}room/getStart/`, { email, getStart: getStartStringData });
        console.log(result)
        if (result.status === 200) {
          setActive(5);
        }
      } catch (error) {
        setActive(4);
      }
    }
  }

  const describeHandler = async () => {
    try {
      const describeStringData = JSON.stringify(describeItem);
      const result = await axios.post(`${API_URL}room/describeItem/`, { email, describeItem: describeStringData })
      console.log(result)
      if (result.status === 200) {
        setActive(6);
      }
    } catch (error) {
      setActive(5);
    }
  }

  const addressHandler = async () => {
    if (address === '') {
      alert('Please input your flat location!')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}room/address/`, { email, address });
        console.log(result)
        if (result.status === 200) {
          setActive(7);
        }
      } catch (error) {
        setActive(6);
      }
    }
  }

  const livingHandler = async () => {
    try {
      const result = await axios.post(`${API_URL}room/living/`, { email, living });
      console.log(result)
      if (result.status === 200) {
        setActive(8);
      }
    } catch (error) {
      setActive(7);
    }
  }

  const countryHandler = async () => {
    try {
      const result = await axios.post(`${API_URL}room/country/`, { email, country });
      console.log(result)
      if (result.status === 200) {
        setActive(9);
      }
    } catch (error) {
      setActive(8);
    }
  }

  const photoHandler = async () => {
    console.log(photo)
    let formData = new FormData()
    photo.forEach(ph => {
      console.log(ph.file)
      formData.append("images", ph.file)
    })
    formData.append("email", email)
    try {
      const result = await axios.post(`${API_URL}room/myImage/`, formData);
      console.log(result);
      if (result.status === 200) {
        setActive(10)
      }
    } catch (error) {
      setActive(9)
    }
  }

  const sizeHandler = async () => {
    const size_str = JSON.stringify(size);
    console.log(size_str)
    try {
      const result = await axios.post(`${API_URL}room/size/`, { email, size: size_str });
      console.log(result)
      if (result.status === 200) {
        setActive(11);
      }
    } catch (error) {
      setActive(10);
    }
  }

  const PreparePayHandler = async () => {
    if (preparePay === 0) {
      alert('Please input your rent cost!')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}room/preparePay/`, { email, preparePay });
        console.log(result)
        if (result.status === 200) {
          setActive(12);
        }
      } catch (error) {
        setActive(11);
      }
    }
  }

  const kindHandler = async () => {
    if (kind === '') {
      alert('Please check kind of room')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}room/kind/`, { email, kind })
        console.log(result)
        if (result.status === 200) {
          setActive(13);
        }
      } catch (error) {
        setActive(12)
      }
    }
  }

  const roomsizeHandler = async () => {
    if (roomsize === '') {
      alert('Please check room size!')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}room/room_size/`, { email, roomsize })
        console.log(result)
        if (result.status === 200) {
          setActive(14);
        }
      } catch (error) {
        setActive(13)
      }
    }

  }

  const stayHandler = async () => {
    try {
      const stay_str = JSON.stringify(stay);
      console.log(stay_str)
      const result = await axios.post(`${API_URL}room/move_date/`, { email, move_date: stay_str });
      if (result.status === 200) {
        setActive(15);
      }
    } catch (error) {
      setActive(14)
    }
  }

  const comingHandler = async () => {
    try {
      const comingJsondata = { 'data': flat };
      const comingStringdata = JSON.stringify(comingJsondata);
      const result = await axios.post(`${API_URL}room/coming/`, { email, coming: comingStringdata })
      console.log(result)
      if (result.status === 200) {
        setActive(16);
      }
    } catch (error) {
      setActive(15);
    }
  }

  const descriptionHandler = async () => {
    if (description === '') {
      alert('Please input your description!')
    }
    else {
      try {
        const result = await axios.post(`${API_URL}room/description/`, { email, description })
        console.log(result)
        if (result.status === 200) {
          setActive(17);
        }
      } catch (error) {
        setActive(16);
      }
    }
  }

  const handleNextClick = a => {
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
      // setGetStart({});
      getStartHandler();
    }
    if (active === 5) {
      describeHandler();
    }
    if (active === 6) {
      setAddress('');
      addressHandler();
    }
    if (active === 7) {
      livingHandler();
    }
    if (active === 8) {
      countryHandler();
    }
    if (active === 9) {
      photoHandler();
    }
    if (active === 10) {
      sizeHandler();
    }
    if (active === 11) {
      setPreparePay(0);
      PreparePayHandler();
    }
    if (active === 12) {
      setKind('');
      kindHandler();
    }
    if (active === 13) {
      setRoomsize('');
      roomsizeHandler();
    }
    if (active === 14) {
      stayHandler();
    }
    if (active === 15) {
      comingHandler();
    }
    if (active === 16) {
      setDescription('');
      descriptionHandler();
    }
    if (active === 17) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/dashboard';
    }
  };

  const handleSizeInputChange = (data) => {
    setSize(data);
  }
  const handleGetStartInputChange = (data) => {
    setGetStart(data);
  }
  const handleAvailableInputChange = (data) => {
    setStay(data);
  }
  const handlePrevClick = a => {
    if (a === 3) { a = 2; }
    if (a === 4) { window.location.href = '/' }
    a--;
    if (a === 0) { a = 1; }
    setActive(a);
  };
  const handleRegInputChange = (data) => {
    setRegist(data);
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
          component={<GetStart handleGetStartInputChange={handleGetStartInputChange} />}
        />
        <CDBStep
          id={5}
          icon="check"
          name="Personal Data"

          active={active}
          component={<Describe describeItem={describeItem} setDescribeItem={setDescribeItem} />}
        />
        <CDBStep
          id={6}
          icon="check"
          name="Personal Data"

          active={active}
          component={<Location address={address} setAddress={setAddress} />}
        />
        <CDBStep
          id={7}
          icon="check"
          name="Personal Data"

          active={active}
          component={<Living living={living} setLiving={setLiving} />}
        />
        <CDBStep
          id={8}
          icon="check"
          name="Personal Data"

          active={active}
          component={<Country country={country} setCountry={setCountry} />}
        />
        <CDBStep
          id={9}
          icon="check"
          name="Personal Data"

          active={active}
          component={<AddPhoto photo={photo} setPhoto={setPhoto} />}
        />
        <CDBStep
          id={10}
          icon="check"
          name="Terms and Conditions"
          active={active}
          component={<Size handleSizeInputChange={handleSizeInputChange} />}
        />
        <CDBStep
          id={11}
          icon="check"
          name="Personal Data"

          active={active}
          component={<PreparePay preparePay={preparePay} setPreparePay={setPreparePay} />}
        />
        <CDBStep
          id={12}
          icon="check"
          name="Personal Data"

          active={active}
          component={<Kind kind={kind} setKind={setKind} />}
        />
        <CDBStep
          id={13}
          icon="check"
          name="Personal Data"

          active={active}
          component={<RoomSize roomsize={roomsize} setRoomsize={setRoomsize} />}
        />
        <CDBStep
          id={14}
          icon="check"
          name="Personal Data"

          active={active}
          component={<Stay handleAvailableInputChange={handleAvailableInputChange} />}
        />
        <CDBStep
          id={15}
          icon="check"
          name="Personal Data"

          active={active}
          component={<Coming setFlat={(data) => { setFlat([...data]) }} />}
        />
        <CDBStep
          id={16}
          icon="check"
          name="Personal Data"

          active={active}
          component={<Description description={description} setDescription={setDescription} />}
        />
        <CDBStep
          id={17}
          icon="check"
          name="Personal Data"

          active={active}
          component={<Success />}
        />
      </CDBStepper>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
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
          style={{ width: 100 }}
          block
          className="float-end"
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

export default FindRoom;

// const FlexColumnContainer = styled('div')`
//   padding: 10px;
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