import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Profile() {
    const [btnText, dataName] = useState("");

    let request = async () => {
        const response = await fetch('http://localhost:3001/profile');
        const data = await response.json();
        dataName(data.title);
        console.log(btnText);
    }
    
    useEffect(() => {
        request();
    }, [])

    return (
        <div className = "Profile">
            <Link to="/home">Home</Link>
            <div>mrb, {btnText} </div>
        </div>
    );
}

export default Profile;