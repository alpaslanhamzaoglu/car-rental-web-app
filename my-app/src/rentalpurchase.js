import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './purchase.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, Row, Container, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import Axios from 'axios'

document.body.style.background = "#9caeff"

function Purchase() {

    const [destination, setDestination] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const [departure, setDeparture] = useState("");
    const [carmodel, setCarModel] = useState("");
    const [price, setPrice] = useState("");
    const [adate, setDate] = useState("");

    const submitMail = () => {
        Axios.post("http://localhost:3001/advertCreation", {
            destination: destination, departureTime: departureTime,
            arrivalTime: arrivalTime, departure: departure, carmodel: carmodel, price: price, adate: adate
        }).then(function (response) {
            console.log(response);
        });
    };

    let request = async () => {
        const response = await fetch('http://localhost:3001/listing');
        const data = await response.json();
    }

    useEffect(() => {
        request();
    }, [])

    return (
        <div className="Purchase">
            <div class="container">
                <div class="row">
                    <div class="col align-self-center" className="gee"><svg xmlns="http://www.w3.org/2000/svg" width="4%" height="auto" fill="rgb(144, 0, 0)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /> </svg>
                    </div>
                    <Link to="/home" style={{ textDecoration: 'none' }}><div class="col align-self-center" className="p1">AGA</div></Link>
                    <div class="col align-self-center" className="p2">Car Pooling System</div>
                    <div class="col align-self-center" className="pmes">
                        <p>You can purchase your car pooling or car rental now.</p>
                    </div>
                </div>
            </div>
            <div>
                <Container>
                    <Form>
                        <Row className="mb-3" id="firstrow1">
                            <Form.Group as={Col} controlId="formGridEmail" onChange={(e) => { setDeparture(e.target.value) }}>
                                <Form.Label>Beginning of Rent</Form.Label>
                                <input type="date" id="beginrent" class="form-control"></input>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword" onChange={(e) => { setDestination(e.target.value) }}>
                                <Form.Label>End of Rent</Form.Label>
                                <input type="date" id="endrent" class="form-control"></input>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail" onChange={(e) => { setDeparture(e.target.value) }}>
                                <Form.Label>Name on Card</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword" onChange={(e) => { setDestination(e.target.value) }}>
                                <Form.Label>Email for Card</Form.Label>
                                <Form.Control type="email" placeholder="" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Credit Card Number</Form.Label>
                            <Form.Control placeholder="XXXX-XXXX-XXXX-XXXX" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Credit Card CVV Number</Form.Label>
                                <Form.Control placeholder="XXX" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Credit Card Expire Date</Form.Label>
                                <input type="date" id="inputMDEx1" class="form-control"></input>
                            </Form.Group>
                        </Row>

                        <Button id="buybutton" variant="primary" type="submit" onClick={submitMail}>
                            Buy
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>

    );
}

export default Purchase;