import {Navbar, Container, Nav} from 'react-bootstrap'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Home';
import About from '../About';
function Navigation () {
    return (
        <>
        
          <Navbar bg="light" expand="lg">
  <Container >
  
    <Navbar.Brand> <Link to="/" className='text-decoration-none text-dark'>The Turtle Non Profit</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link ><Link to="/" className='text-decoration-none text-dark'>Home</Link></Nav.Link>
      <Nav.Link><Link to="/about" className='text-decoration-none text-dark'>About</Link></Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
        <main><Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes></main>
        </>
      

    )
}

export default Navigation