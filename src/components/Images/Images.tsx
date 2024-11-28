import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import styles from "./Images.module.css";
import image1 from "../../assets/image/image1.jpg";
import image2 from "../../assets/image/image2.jpg";
import image3 from "../../assets/image/image1.jpg";
import image4 from "../../assets/image/image4.jpg";
import image5 from "../../assets/image/image5.jpeg";
import image6 from "../../assets/image/image6.jpeg";

const images = [
  image1,image2,image3,image4,image5,image6
];

const Images = () => {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (index: number) => {
    setCurrentIndex(index);
    setShow(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container>
      <div className={styles.imageGallery}>
        <Row>
          {images.map((image, index) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              className="mb-4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={image}
                alt={`Gallery ${index}`}
                onClick={() => handleShow(index)}
                style={{ cursor: "pointer" }}
              />
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Image Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex}`}
              className="img-fluid"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlePrev}>
              Previous
            </Button>
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
};

export default Images;
