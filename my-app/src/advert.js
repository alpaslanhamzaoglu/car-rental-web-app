import React from 'react';
import { Card, Button, Row, Container, Col, FloatingLabel } from 'react-bootstrap';

function Advert(props) {
  return (
    <advert>
      <Card className="text-center" style={{ width: '50rem' }}>
        <Card.Header>{props.advert.departure} - {props.advert.destination}</Card.Header>
        <Card.Body>
          <Card.Title>{props.advert.deptime} - {props.advert.arrtime}</Card.Title>
          <Card.Text>
            {props.advert.carmodel}
          </Card.Text>
          <Button variant="primary">Purchase</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      <br />
    </advert>
  )
}

export default Advert;