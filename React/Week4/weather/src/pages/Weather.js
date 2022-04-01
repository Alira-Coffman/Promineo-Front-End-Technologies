import React from "react";
import {Row, Col, Image, Form, Button} from 'react-bootstrap';
import WindSpeed from "../components/WindSpeed";
import WeatherCard from '../components/WeatherCard';
function Weather()
{
    const date = Date();
    return(
        <Row>
            <Col className="text-center">
                <Form>
                <Form.Group className="d-flex " controlId="lastName">
                        <Form.Label>Your City</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                </Form>
                {date}
                <div className="d-flex">
                <i class="bi bi-cloud-hail display-1 fw-bold px-2"></i>
                <span className="display-1 fw-bold">75 Deg</span>
                </div>
                <span className="display-5 fw-bold">Hail</span>
                <br />
                <WindSpeed wind='19.5' hum='10'/>
            </Col>
            <Col className="d-flex">
            <WeatherCard date='today' hum='10'/>
            <WeatherCard date='today' hum='10'/>
            <WeatherCard date='today' hum='10'/>
            <WeatherCard date='today' hum='10'/>
            <WeatherCard date='today' hum='10'/>
            </Col>
        </Row>
    );
}
export default Weather;