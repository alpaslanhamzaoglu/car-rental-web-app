import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './advertlisting.css';
import axios from 'axios'
import { Form, Button, Row, Container, Col, Card, InputGroup, FormControl, FormGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Advert from './advert.js';

document.body.style.background = "#9caeff"

function AdvertListing() {

    const [adverts, setAdverts] = useState([]);

    const [filteredData, setFilteredData] = useState(adverts);

    const [destination, setDestination] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const [departure, setDeparture] = useState("");
    const [carmodel, setCarModel] = useState("");
    const [price, setPrice] = useState("");
    const [adate, setDate] = useState("");

    const handleSearch = (event) =>{
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = adverts.filter((data) => {
            return data.title.search(value) !== -1;
        });
        setFilteredData(result);
    }

    const [searchActive, setSearch] = useState(false);
    const setActiveSearch = () => setSearch(true);
    const setDeactiveSearch = () => setSearch(false);

    let request = async () => {
        const response = await fetch('http://localhost:3001/listing');
        const data = await response.json();

        setAdverts(data);
        setFilteredData(data);
    }

    useEffect(() => {
        request();
    }, [])

    return (
        <div className="AdvertListing">

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

                        <Button variant="primary" type="submit" onClick={() => searchActive()}>
                            Search
                        </Button>
                    </Form>
                </Container>
            </div>

            <section className="Filter">
                {searchActive ? (
                    <div className="Adverts" id="advertss">
                        {(filteredData != null) ? filteredData.map((advert, index) => <Advert key={index} advert={advert} />) : ''}
                    </div>
                ) : (
                    <div className="Adverts" id="advertss">
                        {(adverts != null) ? adverts.map((advert, index) => <Advert key={index} advert={advert} />) : ''}
                    </div>                    
                )}
            </section>

            <div className="Adverts" id="advertss">
                {(adverts != null) ? adverts.map((advert, index) => <Advert key={index} advert={advert} />) : ''}
            </div>
            
        </div>
    );
}

export default AdvertListing;