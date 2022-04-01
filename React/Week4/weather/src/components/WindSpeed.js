import React from "react";
import {Row, Col} from 'react-bootstrap';

function WindSpeed({wind, hum})
{
    return( 
        <Row>
            <Col>
                <p className="text-muted">Humidity</p>
                <p>{hum}%</p>
            </Col>
            <Col>
                <p className="text-muted">Wind Speed</p>
                <p>{wind} km/j</p>
            </Col>
        </Row>
       
    );
   
}
export default WindSpeed;
