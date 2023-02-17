import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import registerImage from "../images/registration.png";

function Signup() {
  return (
    <div className="container mx-auto my-5 p-5 shadow rounded-5" style={{background: '#e3f0fe'}}>
      <h1>SIGN UP</h1>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <Form>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>YOUR NAME</Form.Label>
                  <Form.Control type="text" placeholder="Subhan Ghani" />
                </Form.Group>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>YOUR EMAIL</Form.Label>
                  <Form.Control type="text" placeholder="example@gmail.com" />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>MOBILE NUMBER</Form.Label>
              <Form.Control type="number" placeholder="03XXXXXXXXX" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>CONFIRM PASSWORD</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            
            <NavLink to='/login'>
            <Button type="submit" variant="primary" className="w-25">Register</Button>
            </NavLink>
          </Form>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <img src={registerImage} width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
