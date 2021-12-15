import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './advert.css';

function Advert(props) {
  const date = props.advert.adate;
  const mydate = date.substring(8,10) + "-" + date.substring(5,7) + "-" + date.substring(0,4);
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
        <Card.Footer className="text-muted">{mydate}</Card.Footer>
      </Card>
      <br />
    </advert>
  )
}

export default Advert;