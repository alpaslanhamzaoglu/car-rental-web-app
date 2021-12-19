import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './advertcreation.css';
import Axios from 'axios'
import { Form, Button, Row, Container, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

document.body.style.background = "#9caeff"

function AdvertCreation() {

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
            arrivalTime: arrivalTime, departure: departure, carmodel: carmodel, price: price, adate: adate,
            motorcycle: motorcycleCheck
        }).then(function (response) {
            console.log(response);
            if (response.data.message === "Successful") {
                window.location.href = "/home";
              } else {
                alert(response.data.message);
              }
        });
    };

    const [motorcycleCheck, setMotor] = useState(false);
    const changeVeh = () => setMotor(!motorcycleCheck);

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        justifyContent:'center',
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 12,
          height: 12,
          borderRadius: 6,
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
          boxSizing: 'border-box',
        },
      }));

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
                            <Form.Group as={Col} controlId="formGridEmail" onChange={(e) => { setDeparture(e.target.value) }}>
                                <Form.Label>Departure</Form.Label>
                                <Form.Control type="text" placeholder="Enter where you are going from" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword" onChange={(e) => { setDestination(e.target.value) }}>
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" placeholder="Enter where you are going to" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridZip" onChange={(e) => { setDepartureTime(e.target.value) }}>
                                <div class="md-form mx-5 my-5">
                                    <input type="time" id="inputMDEx1" class="form-control"></input>
                                    <label for="inputMDEx1">Choose your departure time</label>
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip" onChange={(e) => { setArrivalTime(e.target.value) }}>
                                <div class="md-form mx-5 my-5">
                                    <input type="time" id="inputMDEx1" class="form-control"></input>
                                    <label for="inputMDEx1">Choose your arrival time</label>
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip" onChange={(e) => { setDate(e.target.value) }}>
                                <div class="md-form mx-5 my-5">
                                    <input type="date" id="inputMDEx1" class="form-control"></input>
                                    <label for="inputMDEx1">Choose your travel date</label>
                                </div>
                            </Form.Group>
                        </Row>

                        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" marginBottom={2}>
                            <Typography>Motorcycle</Typography>
                            <AntSwitch checked={!motorcycleCheck} onChange={changeVeh} inputProps={{ 'aria-label': 'ant design' }} />
                            <Typography>Car</Typography>
                        </Stack>

                        <Row className="mb-3">
                            <InputGroup as={Col} controlId="formGridMoney" id="money" onChange={(e) => { setPrice(e.target.value) }}>
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormControl placeholder="Desired amount of money" aria-label="Amount (to the nearest dollar)" />
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>

                            <Form.Group as={Col} controlId="formGridCar" onChange={(e) => { setCarModel(e.target.value) }}>
                                <Form.Label></Form.Label>
                                <Form.Control placeholder="Car Model" />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" onClick={submitMail}>
                            Create
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
}

export default AdvertCreation;