import React from "react";
import {Row, Col, Image, Form, Button} from 'react-bootstrap';

function Signup()
{
    return(
        <div className="Signup">
            <Row className="px-5">
                <Col lg='6' md='2'>
                <h1>
                    Signup
                </h1>
                <Form>
                    <div className="d-flex justify-content-between">
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    </div>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Create Password" />
                    </Form.Group>
                   
                    <Button variant="outline-info" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p className="text-muted mt-2">Already have an account? <a href="">Login</a></p>
                </Col>
                <Col>
                <Image src="/banner.jpg" fluid/>
                </Col>
            </Row>

        </div>
    );
    
}

export default Signup;