import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
/***
 * first name, lastname, email, textarea
 * 
 * 
 * 
 * 1. Row and Col (Grid) | |
 *  - Pro: documentation has a row and <col />
 *  - Grid is good if not sure total number of elements. responsive.
 * 2. Table?
 *  - Pro: organization. categories.
 *  - Pro: Static to dimensions
 *  - Con: pain to deal with.
 *  - Con: problem statement is layouts. 
 * 3. D flex flexbox | d-flex justify-content-**
 *  - Pro: dont have to think about it. I already know this material.
 *  - Con: Harder to customize exactly where you want it.
 *  - Con: break elements inside. 
 *  - Con: Responsive problems possible. (may require maintenence)
 */
export default function ContactForm()
{
    const content = 'hello, im a passed message!';
   return(
    <>
    <Container>
    <Link 
    to={"/"}
    state={{test: content}}>
    Cancel </Link>


        <Form>
            <Row>

                
                <Col>
                    <Form.Group className='mb-4'>
                        <Form.Label> First Name </Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                </Col>
           
                <Col>
                    <Form.Group className='mb-4'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                </Col>
            </Row>
           
            <Row className='mb-3'>
                <Form.Group as={Col} className='mb-4'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group as={Col} className='mb-4 d-inline'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
            </Row>

        </Form>
    </Container>
    </>

    )
}