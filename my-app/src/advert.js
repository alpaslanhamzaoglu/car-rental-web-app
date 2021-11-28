import React from 'react';
import { Card, Button, Row, Container, Col, FloatingLabel } from 'react-bootstrap';

function Advert(props) {
  return (
    <advert>
      <Card className="text-center">
      <Card.Header>{props.advert.departure} - {props.advert.destination}</Card.Header>
      <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </advert>
  )
}

export default Advert;