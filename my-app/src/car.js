import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './car.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Car(props) {

  const navigate = useNavigate();

  const func = () => {
    Axios.post("http://localhost:3001/purchase", { advert : props.advert }).then(function (response) {
      if(response.data.message === "Success") {
        navigate("/rentalpurchase");
      }
    })
  }

  return (
    <car>
      <Card className="text-center" style={{ width: '50rem' }}>
        <Card.Header>{props.advert.rentcarmodel}</Card.Header>
        <Card.Body>
          <Card.Title>{props.advert.rentprice} TL</Card.Title>
          <Button variant="primary" onClick={func}>Purchase</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <br />
    </car>
  )
}

export default Car;