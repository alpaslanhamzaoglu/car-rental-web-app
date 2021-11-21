import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Login from "./login";
import Profile from "./register";

function App() {
    return (
        <Router>
            <Routes> 
                <Route exact path = "/login" element = {<Login/>} />
                <Route exact path = "/register" element = {<Profile/>} />
            </Routes>
        </Router>
    )
}

export default App;