import React, { useState } from 'react'
import { Form, Container } from 'react-bootstrap'
import '../../App.css'

function SignIn(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className='zoomout'>
            <Container>
                <h2 style={{ textAlign: "center", padding: "25px 0" }}>
                    FlatMe brings places and people together 🌸
                </h2>
                <h3 style={{ textAlign: "center", padding: "25px 0", }}>
                    Hey there! Let's Get you Started!
                </h3>
                <Form
                    noValidate validated={validated} onSubmit={handleSubmit}
                >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label htmlFor="validationDefault01">Email</Form.Label>
                        <Form.Control
                            id="validationDefault01"
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={(e) => props.setEmail(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}
export default SignIn

// import { useState } from 'react';
// import {  Container } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// function SignIn(props) {
//     const [validated, setValidated] = useState(false);

//     const handleSubmit = (event) => {
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         }

//         setValidated(true);
//     };

//     return (
//         <div className='zoomout'>
//             <Container>
//                 <h2 style={{ textAlign: "center", padding: "25px 0" }}>
//                     FlatMe brings places and people together 🌸
//                 </h2>
//                 <h3 style={{ textAlign: "center", padding: "25px 0", }}>
//                     Hey there! Let's Get you Started!
//                 </h3>

//                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                     <Form.Group as={Col} md="12" controlId="validationCustomUsername">
//                         <Form.Label>email</Form.Label>
//                         <InputGroup hasValidation>
//                             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                             <Form.Control
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 aria-describedby="inputGroupPrepend"
//                                 required
//                                 onChange={(e) => props.setEmail(e.target.value)}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 Please choose a email.
//                             </Form.Control.Feedback>
//                         </InputGroup>
//                     </Form.Group>
//                     <Button type="submit">Submit form</Button>
//                 </Form>
//             </Container>
//         </div>
//     );
// }

// export default SignIn;