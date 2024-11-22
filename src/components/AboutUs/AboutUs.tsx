import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const AboutUs = () => {
  return (
    <div style={{ height: "100vh", paddingTop: "126px" }}>
      <Container>
        <Row className="my-5">
          <Col>
            <h1>About Our School</h1>
            <p>
              Welcome to our school! We are dedicated to providing a
              high-quality education to our students. Our mission is to foster a
              love of learning and to help each student reach their full
              potential.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Our History</Card.Title>
                <Card.Text>
                  Our school was founded in 1990 with the goal of creating a
                  nurturing and challenging environment for students. Over the
                  years, we have grown and evolved, but our commitment to
                  excellence has remained constant.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to provide a comprehensive education that
                  prepares students for success in college and beyond. We
                  emphasize critical thinking, creativity, and collaboration in
                  all of our programs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Our Values</Card.Title>
                <Card.Text>
                  We believe in the importance of integrity, respect, and
                  responsibility. These values guide our interactions with
                  students, parents, and the community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  If you have any questions or would like to learn more about
                  our school, please don't hesitate to contact us. We look
                  forward to hearing from you!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
