import React from "react";
import {Row, Col, Image, Form, Button} from 'react-bootstrap';

function Login()
{
    return(
        <div className="Login">
            <Row className="px-5">
                <Col lg='6' md='2'>
                <h1>
                    Login
                </h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Need to sign up? <a href="">Create an Account.</a></p>
                </Col>
                <Col>
                    <Image src="/banner.jpg" fluid/>
                </Col>
            </Row>

        </div>
    );
    
}

export default Login;