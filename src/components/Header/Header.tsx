import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "./Header.module.css";

import Logo from "../../assets/image/logo.png";
function Header() {
  return (
    <div  className={styled.header}>
      <Navbar expand="lg">
        <Container style={{maxWidth:'96%'}}>
          <Navbar.Brand
            href="#home"
            className={styled.brand}
          >
            <img alt="" src={Logo} className="d-inline-block align-top" />
            <div className={styled.school}>
              <div className={styled.name}>Dev Samaj School</div>
              <div className={styled.location}>Sukhdev Vihar(New Delhi)</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={styled.link}>
                ABOUT US
              </Nav.Link>
              <Nav.Link href="#link" className={styled.link}>
                MPD
              </Nav.Link>
              <Nav.Link href="#home" className={styled.link}>
                HOME
              </Nav.Link>
              <Nav.Link href="#link" className={styled.link}>
                PARENTS
              </Nav.Link>
              <Nav.Link href="#home" className={styled.link}>
                CURRICULUM
              </Nav.Link>
              <Nav.Link href="#link" className={styled.link}>
                GALLERY
              </Nav.Link>
              <Nav.Link href="#home" className={styled.link}>
                CONTACT US
              </Nav.Link>
              <Nav.Link href="#link" className={styled.link}>
                REGISTRATION
              </Nav.Link>
              <Nav.Link href="#home" className={styled.link}>
                HISTORY
              </Nav.Link>
              <Nav.Link href="#link" className={styled.link}>
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
