import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Profile() {
    const [btnText, dataName] = useState("");
    const [pass, dataName0] = useState("");

    let request = async () => {
        const response = await fetch('http://localhost:3001/profile');
        const data = await response.json();
        dataName(data[0].uemail);
        dataName0(data[0].password);        
    }

    useEffect(() => {
        request();
    }, [])

    return (
        <div className="Profile">
            <div class="container">
                <div class="row">
                    <div class="col align-self-center" className="gee"><svg xmlns="http://www.w3.org/2000/svg" width="4%" height="auto" fill="rgb(144, 0, 0)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /> </svg>
                    </div>
                    <Link to="/home" style={{ textDecoration: 'none' }}><div class="col align-self-center" className="p1">AGA</div></Link>
                    <div class="col align-self-center" className="p2">Car Pooling System</div>
                </div>
            </div>
            <div>
                {/* <div>Hello, {btnText}</div> */}
                {/* <div className="midiv">
                    <img src="/van.jpg" alt="" className="profilephoto"/>
                </div> */}
                <Container>
                    <Form>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="emailform" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="passwordform" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="passwordrepeat" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Repeat Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="registerButton">
                                    <Button variant="primary" type="submit" className="registerButton">
                                        Register
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>

        </div>

    );
}

export default Profile;