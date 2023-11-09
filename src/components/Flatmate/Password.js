import React from 'react'
import { Form, Container } from 'react-bootstrap'
import '../../App.css'

function Password(props) {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='zoomout'>
            <Container>
                <h2
                    style={{
                        textAlign: "center",
                        padding: "25px 0",
                    }}
                >
                    FlatMe brings places and people together 🌸
                </h2>
                <h3
                    style={{
                        textAlign: "center",
                        padding: "25px 0",
                    }}>Hey there! Let's Get you Started!</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            name="email"
                            onChange={(e) => props.setPassword(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}
export default Password