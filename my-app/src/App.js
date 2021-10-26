import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Form, Button, Row } from 'react-bootstrap';

document.body.style.background = "#9caeff"

function App() {
  return (
    
    <div className="App">
      
      <div class="container">
        <div class="row">
          <div class="col align-self-center" className="gee"><svg xmlns="http://www.w3.org/2000/svg" width="4%" height="auto" fill="rgb(144, 0, 0)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /> </svg>
          </div>
          <div class="col align-self-center" className="p1">AGA</div>
          <div class="col align-self-center" className="p2">Car Pooling System</div>
        </div>
      </div>

      <div>
        <Form>

          <Form.Group className="form1" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="form2" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="lin1"><a href="">Forgot Password?</a></Form.Group>
          
          <Form.Group className="but1">
            <Button variant="primary" type="submit" >
              Don't have an account?
            </Button>  
            <Button variant="primary" type="submit" className="but2">
              Login
            </Button> 
          </Form.Group>          

        </Form>
      </div>  
      

      {/* <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script> */}
    </div>
  );
}

export default App;
