import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Profile from "./profile";
import Register from "./register";
import Home from "./home";
import ForgotPassword from "./forgotpassword";
import AdvertCreation from "./advertcreation";
import AdvertListing from "./advertlisting";
import CarRental from "./carrental";
import Purchase from "./purchase";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/forgotpassword" element={<ForgotPassword />} />
                <Route exact path="/advertcreation" element={<AdvertCreation />} />
                <Route exact path="/advertlisting" element={<AdvertListing />} />
                <Route exact path="/carrental" element={<CarRental />} />
                <Route exact path="/purchase" element={<Purchase />} />
            </Routes>
        </Router>
    );
}

export default App;