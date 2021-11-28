import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { Link } from "react-router-dom";

document.body.style.background = "#9caeff"

function Home() {

    return (
        <div>
            <div>Home</div>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/register">Register</Link>
            </div>
            <div>
                <Link to="/profile">Profile</Link>
            </div>
            <div>
                <Link to="/advertcreation">Advert Creation</Link>
            </div>
            <div>
                <Link to="/advertlisting">Advert Listing</Link>
            </div>
        </div>

    );
}

export default Home;