import { Container, Button, Form, Row, Col } from "react-bootstrap";
import './index.css';
const Contact = () => {
  return (
    <>
      <Form>
      <Container className="text-center">
        <Row><h3>Contact Info</h3></Row>
        <Row>
          <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='email' placeholder='Enter name' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Phone</Form.Label>
                <Form.Control type='email' placeholder='Enter phone' />
              </Form.Group>
            </Col>
        </Row>
        <Row>
          <div
                onClick={(e) => e.preventDefault()}
                role="button"
                className="contact__savebtn"
              >
                Save
              </div>
        </Row>
      </Container>
      </Form>
    </>
  );
};
export default Contact;
