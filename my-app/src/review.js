import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function Review(props) {
    
    const [name, setName] = useState("");

    let request = async () => {
        Axios.post("http://localhost:3001/getname", { uid : props.advert.userid }).then(function (response) {
          setName(response.data.name);
        })   
    }

    useEffect(() => {
        request();
      }, []);
    

  return (
    <car>
        <Card className="text-center" style={{ width: '50rem' }}>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {props.advert.comment}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        <br />
    </car>
  )
}

export default Review;