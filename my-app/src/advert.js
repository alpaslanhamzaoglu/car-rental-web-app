import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './advert.css';

function Advert(props) {
  const date = props.advert.adate;
  const mydate = date.substring(8, 10) + "-" + date.substring(5, 7) + "-" + date.substring(0, 4);
  const [name, dataName] = useState("");

  const navigate = useNavigate();

  const func = () => {
    Axios.post("http://localhost:3001/purchase", { advert: props.advert }).then(function (response) {
      if (response.data.message === "Success") {
        navigate("/purchase");
      }
    })
  }

  const func2 = () => {
    Axios.post("http://localhost:3001/sendid", { uid : props.advert.uID }).then(function (response) {
      if(response.data.message === "Success") {
        navigate("/profile2");
      }
    })
  }

  let request = async () => {
    Axios.post("http://localhost:3001/getname", { uid : props.advert.uID }).then(function (response) {
      dataName(response.data.name);
    })   
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <advert>
      <Card className="text-center" style={{ width: '50rem' }}>
        <Card.Header>{props.advert.departure} - {props.advert.destination}</Card.Header>
        <Card.Body>
          <Card.Title>{props.advert.deptime} - {props.advert.arrtime}</Card.Title>
          <Card.Text onClick={func2} id="cardtextlink">
            {name}
          </Card.Text>
          {(() => {
            if (props.advert.motorcycle === 0) {
              return  <Card.Text>
                        Car: {props.advert.carmodel}
                      </Card.Text>;
            } else {
              return  <Card.Text>
                        Motorcycle: {props.advert.carmodel}
                      </Card.Text>;
            }
          })()
          }
          
          <Button variant="primary" onClick={func}>Purchase</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{mydate}</Card.Footer>
      </Card>
      <br />
    </advert>
  )
}

export default Advert;