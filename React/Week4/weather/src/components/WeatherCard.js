import React from "react";
import {Card} from 'react-bootstrap';

function WeatherCard({date, hum})
{
    return( 
    <Card bg='primary' style={{ width: '8rem' }}>
        <Card.Body class='text-center'>
<p className="m-0 p-0">{date}</p>
    <i class="bi bi-cloud-lightning text-white"></i>
    <p>{hum} % </p>
        </Card.Body>
    
</Card>
);
   
}
export default WeatherCard;
