import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './advertlisting.css';
import Axios from 'axios'
import { Form, Button, Row, Container, Col, InputGroup, FormControl, FormGroup, Card } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom";

document.body.style.background = "#9caeff"

function AdvertListing() {

    const [password, setPassword] = useState("");
    const [pass_repeat, setPassRepeat] = useState("");

    const submitMail = () => {
        //alttaki conditiona tekrar bak ilerde
        if (pass_repeat === password)
            Axios.post("http://localhost:3001/ForgotPassword", { password: password, pass_repeat: pass_repeat }).then(() => { alert("successful"); });
    };

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
                    <Row className="mb-3" id="firstrow">
                        <Card className="text-center">
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Buy</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AdvertListing;