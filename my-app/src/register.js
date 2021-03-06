import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import Axios from 'axios'
import { Form, Button, Row, Container, Col, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom";

document.body.style.background = "#9caeff"

function Register() {

    const [uname, setName] = useState("");
    const [uemail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [pass_repeat, setPassRepeat] = useState("");
    const [covidvac, setCovidVac] = useState("");
    const [infos, setInfos] = useState("");

    const [failText, setText] = useState("");

    const submitMail = async () => {
        if (pass_repeat === password) {
            Axios.post("http://localhost:3001/register", { uemail: uemail, password: password, pass_repeat: pass_repeat, uname: uname, covidvac: covidvac, infos: infos}).then(function(response) {
                if(response.data.message === "Incomplete information") {
                    setText(response.data.message);
                } else {
                    window.location.href = "/home";
                }
              })
        }
    };

    return (
        <div className="Register">

            <div class="container">
                <div class="row">
                    <div class="col align-self-center" className="gee"><svg xmlns="http://www.w3.org/2000/svg" width="4%" height="auto" fill="rgb(144, 0, 0)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /> </svg>
                    </div>
                    <Link to="/home" style={{ textDecoration: 'none' }}><div class="col align-self-center" className="p1">AGA</div></Link>
                    <div class="col align-self-center" className="p2">Car Pooling System</div>
                </div>
                <div id="fail"> {failText} </div>
            </div>

            <div>
                <Container>
                    <Form>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="nameform" controlId="formBasicName">
                                    <Form.Control type="name" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="emailform2" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" onChange={(e) => { setMail(e.target.value) }} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="passwordform" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="passwordrepeat" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Repeat Password" minLength="8" onChange={(e) => { setPassRepeat(e.target.value) }} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="infos" controlId="formBasicInfo" onChange={(e) => { setInfos(e.target.value)}}>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Type your information which we'll be known for the other users"
                                        id="exampleFormControlTextarea1"
                                        style={{ height: '100px' }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <FloatingLabel controlId="floatingSelect" label="Works with selects" id="vacform" onChange={(e) => { setCovidVac(e.target.value)}}>
                                    <Form.Select aria-label="Floating label select example">
                                        <option>Covid Vaccination Status</option>
                                        <option value="1">None</option>
                                        <option value="2">One Doses</option>
                                        <option value="3">Two Doses</option>
                                        <option value="4">Two Doses + Boosted</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="registerButton">
                                    <Button variant="primary" /*type="submit"*/ className="registerButton" onClick={submitMail}>
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

export default Register;
