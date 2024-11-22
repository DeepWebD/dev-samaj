
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const ContactUs = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>Contact Us</h1>
          <p>
            If you have any questions or would like to learn more about our school, please fill out the form below or contact us directly.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Our Address</h2>
          <p>
            123 School Lane<br />
            Education City, ED 12345<br />
            Phone: (123) 456-7890<br />
            Email: info@ourschool.edu
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;