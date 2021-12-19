import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Button, Row, Container, Col, Card, InputGroup, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import './profile2.css';
import Review from './review.js';

function Profile2() {
    const [name, dataName] = useState("");
    //const [pass, dataPass] = useState("");
    const [mail, dataMail] = useState("");
    const [vac, dataVac] = useState("");
    const [info, dataInfo] = useState("");
    const [reviews, dataReview] = useState([]);

    const [comment, setComment] = useState("");

    let request = async () => {
        const response = await fetch('http://localhost:3001/profile2');
        const data = await response.json();

        console.log(data);
        dataName(data[0].uname);
        //dataPass(data[0].password);
        dataMail(data[0].uemail);
        dataVac(data[0].covidvac);
        dataInfo(data[0].infos);
    }

    let requestReview = async () => {
        const response = await fetch('http://localhost:3001/reviews');
        const data = await response.json();

        dataReview(data);
    }

    const addComment = () => {
        Axios.post("http://localhost:3001/addcomment", { comment: comment }).then(function (response) {
          if (response.data.message === "No Comment") {
            alert(response.data.message);
          } else {
            window.location.href = "/profile2";
          }
        })
          .catch(function (error) {
            console.log(error);
          });
      };

    useEffect(() => {
        request();
        requestReview();
    }, [])

    return (
        <div className="Profile2">

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
                        <Col xs lg="6">The user name is {name}.</Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="6">The user email is {mail}.</Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="6">The user info is {info}.</Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="6">Number of covid vaccination the user had is {vac - 1}.</Col>
                    </Row>
                </Container>

                <div id="commentbox">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Make a comment for this user"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={(e) => { setComment(e.target.value) }}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={addComment}>
                            Send
                        </Button>
                    </InputGroup>
                </div>
                <div className="Adverts" id="advertss">
                    {(reviews != null) ? reviews.map((advert, index) => <Review key={index} advert={advert} />) : ''}
                </div>
                
            </div>
        </div>

    );
}

export default Profile2;