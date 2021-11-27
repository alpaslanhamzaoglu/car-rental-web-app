import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './advertcreation.css';
import Axios from 'axios'
import { Form, Button, Row, Container, Col, InputGroup, FormControl, FormGroup } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom";

document.body.style.background = "#9caeff"

function AdvertCreation() {

    const [password, setPassword] = useState("");
    const [pass_repeat, setPassRepeat] = useState("");

    const submitMail = () => {
        //alttaki conditiona tekrar bak ilerde
        if (pass_repeat === password)
            Axios.post("http://localhost:3001/ForgotPassword", { password: password, pass_repeat: pass_repeat }).then(() => { alert("successful"); });
    };

    return (
        <div className="AdvertCreation">

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
                <Container>
                    <Form>
                        <Row className="mb-3" id="firstrow">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Departure</Form.Label>
                                <Form.Control type="text" placeholder="Enter where you are going from" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" placeholder="Enter where you are going to" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridZip">
                                <div class="md-form mx-5 my-5">
                                    <input type="time" id="inputMDEx1" class="form-control"></input>
                                    <label for="inputMDEx1">Choose your departure time</label>
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <div class="md-form mx-5 my-5">
                                    <input type="time" id="inputMDEx1" class="form-control"></input>
                                    <label for="inputMDEx1">Choose your arrival time</label>
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <div class="md-form mx-5 my-5">
                                    <input type="date" id="inputMDEx1" class="form-control"></input>
                                    <label for="inputMDEx1">Choose your travel date</label>
                                </div>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <InputGroup as={Col} controlId="formGridMoney" id="money">
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormControl placeholder="Desired amount of money" aria-label="Amount (to the nearest dollar)" />
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>

                            <Form.Group as={Col} controlId="formGridCar">
                                <Form.Label></Form.Label>
                                <Form.Control placeholder="Car Model" />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
}

export default AdvertCreation;