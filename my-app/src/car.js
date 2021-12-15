import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './car.css';

function Car(props) {
  return (
    <car>
      <Card className="text-center" style={{ width: '50rem' }}>
        <Card.Header>{props.advert.rentcarmodel}</Card.Header>
        <Card.Body>
          <Card.Title>{props.advert.rentprice} TL</Card.Title>
          <Button variant="primary">Purchase</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <br />
    </car>
  )
}

export default Car;