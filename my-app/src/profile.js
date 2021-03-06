import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Form, Button, Row, Container, Col, FloatingLabel, Card, ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import './profile.css';

function Profile() {

    const [name, dataName] = useState("");
    //const [pass, dataPass] = useState("");
    const [mail, dataMail] = useState("");
    const [vac, dataVac] = useState("");
    const [info, dataInfo] = useState("");

    const [uname, setName] = useState("");
    const [uemail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [pass_repeat, setPassRepeat] = useState("");
    const [covidvac, setCovidVac] = useState("");
    const [infos, setInfos] = useState("");

    let request = async () => {
        const response = await fetch('http://localhost:3001/profile');
        const data = await response.json();
        dataName(data[0].uname);
        //dataPass(data[0].password);
        dataMail(data[0].uemail);
        dataVac(data[0].covidvac);
        dataInfo(data[0].infos);
    }

    useEffect(() => {
        request();
    }, [])

    const submitMail = () => {
        Axios.post("http://localhost:3001/changeProfile", {
            uemail: uemail, password: password, pass_repeat: pass_repeat,
            uname: uname, covidvac: covidvac, infos: infos
        }).then(function (response) {
            console.log(response);
        });
        window.location.reload(false);
    };

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
                <Container id="infos">
                    <Row className="justify-content-md-center">
                        <Col xs lg="12">
                            <Card style={{ fontSize: 'large' }}>
                                <Card.Header style={{ fontSize: 'bold' }}>Your informations are listed here. You can change informations using forms at the bottom.</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Your name: {name}</ListGroup.Item>
                                    <ListGroup.Item>Your email address: {mail}</ListGroup.Item>
                                    <ListGroup.Item>Your informations: {info}</ListGroup.Item>
                                    <ListGroup.Item>Number of covid vaccination: {vac - 1}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Form>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="nameformprofile" controlId="formBasicName">
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
                                    <Form.Control type="password" placeholder="Repeat Password" onChange={(e) => { setPassRepeat(e.target.value) }} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group className="infos" controlId="formBasicInfo" onChange={(e) => { setInfos(e.target.value) }}>
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
                                <FloatingLabel controlId="floatingSelect" label="Works with selects" id="vacform" onChange={(e) => { setCovidVac(e.target.value) }}>
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
                                    <Button variant="primary" className="registerButton" onClick={submitMail}>
                                        Change
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