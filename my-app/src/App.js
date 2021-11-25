import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Profile from "./profile";
import Register from "./register";
import Home from "./home";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App;