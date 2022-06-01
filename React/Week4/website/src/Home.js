
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import { Container, Modal, Button, Alert, Card } from "react-bootstrap";
function Home() {
    const [show, setShow] = useState(true);
    const[showAlert, setShowAlert] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <Container>
          <Alert key='alert' show={showAlert} variant='danger' onClose={() => setShowAlert(false)} dismissible>
          Of the 360 known turtle and tortoise species, 187 are threatened, according to the IUCN Red List criteria. Of these, 127 are endangered or critically endangered. Many could go extinct this century
        <br />
      <Alert.Link href="https://news.mongabay.com/2020/07/turtles-and-tortoises-in-trouble-more-than-half-of-all-species-face-extinction/#:~:text=Of%20the%20360%20known%20turtle,could%20go%20extinct%20this%20century.">  Learn More</Alert.Link>
    
    </Alert>
        <main>
          <h2>Welcome to the Fiction Turtle Non Profit!</h2>
          <p>You can do this, I believe in you.</p>

          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/turtle2.jpg" />
  <Card.Body>
    <Card.Title>Turtles and tortoises in Trouble</Card.Title>
    <Card.Text>
    On the island of Madagascar, locked gates, razor-wire fences, and 24-hour armed guards protect one of the world’s rarest treasures. That treasure, worth roughly $50,000 each on the black market, is the last wild population of the critically endangered ploughshare tortoise, the rarest tortoise on the planet.

The ploughshare tortoise (Astrochelys yniphora) is emblematic of a growing crisis: more than half of the world’s turtle and tortoise species are now threatened with extinction.
    </Card.Text>
    <Button variant="primary"><a className='text-decoration-none text-white' href="https://news.mongabay.com/2020/07/turtles-and-tortoises-in-trouble-more-than-half-of-all-species-face-extinction" target='_blank' rel="noreferrer">Find out more</a></Button>
  </Card.Body>
</Card>
        </main>
      


        {/**Modal */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Donate</Modal.Title>
        </Modal.Header>
        <Modal.Body>Would you like to donate to the Fiction Turtle Non Profit?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      </Container>
    );
  }

  export default Home