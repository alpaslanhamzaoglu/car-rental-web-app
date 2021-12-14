import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './advertlisting.css';
import { Form, Button, Row, Container, Col, Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Axios from 'axios';

import { Link } from "react-router-dom";
import Advert from './advert.js';

document.body.style.background = "#9caeff"

function AdvertListing() {

    const [adverts, setAdverts] = useState([]);

    const [filteredData, setFilteredData] = useState(adverts);

    const [motorcycleCheck, setMotor] = useState(false);
    const changeVeh = () => setMotor(!motorcycleCheck); //backend for switch should be implemented

    const [destination, setDestination] = useState("");
    const [departure, setDeparture] = useState("");
    const [adate, setDate] = useState("");
  
    const [searchActive, setSearch] = useState(false);
    const setActiveSearch = () => setSearch(true);
    const setDeactiveSearch = () => setSearch(false);

    let request = async () => {
        const response = await fetch('http://localhost:3001/listing');
        const data = await response.json();

        setAdverts(data);
        setFilteredData(data);
    }

    const clearSearch = () => {
        destination = "";
        departure = "";
        adate = "";
    }

    const handleSearch = () => {
        setActiveSearch();
        setFilteredData(adverts);
        
        if(destination != "") {
            let arr = [];
            for(let i = 0; i < filteredData.length; i++) {
                if(filteredData[i].destination.includes(destination)) {
                    arr.push(filteredData[i]);
                }
            }
            setFilteredData(arr);
        }
        if(departure != "") {
            let arr = [];
            for(let i = 0; i < filteredData.length; i++) {
                if(filteredData[i].departure.includes(departure)) {
                    arr.push(filteredData[i]);
                }
            }
            setFilteredData(arr);
        }
        if(adate != "") {
            let inputYear = parseInt(adate.substring(0, 4));
            let inputMonth = parseInt(adate.substring(5, 7));
            let inputDay = parseInt(adate.substring(8, 10));

            let arr = [];
            for(let i = 0; i < filteredData.length; i++) {
                let tempYear = parseInt(filteredData[i].adate.substring(0, 4));
                let tempMonth = parseInt(filteredData[i].adate.substring(5, 7));
                let tempDay = parseInt(filteredData[i].adate.substring(8, 10));

                if(inputYear == tempYear && inputMonth == tempMonth && inputDay == tempDay) {

                    arr.push(filteredData[i]);
                }
            }
            setFilteredData(arr);
        }
    }

    useEffect(() => {
        request();
    }, [])

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

                            <Form.Group as={Col} controlId="formGridZip" onChange={(e) => { setDate(e.target.value) }}>
                                <Form.Label>Choose your travel date</Form.Label>
                                <Form.Control type="date" placeholder="Enter the date of travel"/>
                            </Form.Group>
                        </Row>

                        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" marginBottom={2}>
                            <Typography>Motorcycle</Typography>
                            <AntSwitch checked={!motorcycleCheck} onChange={changeVeh} inputProps={{ 'aria-label': 'ant design' }} />
                            <Typography>Car</Typography>
                        </Stack>

                        <Row>
                            <Button as={Col} className="buttons1" variant="primary" onClick={clearSearch, setDeactiveSearch}>
                                Clear Filter
                            </Button>
                            <Button as={Col} className="buttons2" variant="primary" onClick={handleSearch}>
                                Search
                            </Button>
                        </Row>
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
        </div>
    );
}

export default AdvertListing;