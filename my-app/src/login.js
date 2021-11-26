import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import Axios from 'axios'
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

document.body.style.background = "#9caeff"

function Login() {

  const navigate = useNavigate();

  const [uemail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const submitMail = () => {
    Axios.post("http://localhost:3001/login", { uemail: uemail, password: password }).then(function(response) {
      if(response.data.message == "Wrong username/password combination") {
        alert(response.data.message);
      } else {
        window.location.href = "/home";
      }
    })
    .catch(function(error) {
      console.log(error);
    });

    //.then(() => { alert("successful"); }); // some comment
    
  };

  return (
    <div className="Login">


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
            <Row className="justify-content-md-center">
              <Col xs lg="3">
                <Form.Group className="emailform" controlId="formBasicEmail">
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
                <Form.Group className="forgotpassword"><a href="/forgotpassword">Forgot Password?</a></Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs lg="3">
                <Form.Group className="dontbutton">
                  <Button variant="primary" type="submit"
                    onClick={() => {
                      navigate("/register");
                    }}>
                    Don't have an account?
                  </Button>
                  <Button variant="primary" /*type="submit"*/ className="loginbutton" onClick={submitMail}>
                    Login
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

export default Login;