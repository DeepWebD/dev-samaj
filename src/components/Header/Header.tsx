import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "./Header.module.css";

import Logo from "../../assets/image/logo.png";
import { useState } from "react";
function Header() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  let bgColor = styled.transpparent;
  if (colorChange) {
    bgColor = styled.navbar;
  }

  return (
    <div>
      <Navbar fixed="top" expand="lg" className={bgColor}>
        <Container style={{ maxWidth: "96%" }}>
          <Navbar.Brand href="#home" className={styled.brand}>
            <img alt="" src={Logo} className="d-inline-block align-top" />
            <div className={styled.school}>
              <div className={styled.name}>Dev Samaj School</div>
              <div className={styled.location}>Sukhdev Vihar(New Delhi)</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Nav.Link href="#aboutus" className={styled.link}>
                ABOUT US
              </Nav.Link>
              <Nav.Link href="#MPD" className={styled.link}>
                MPD
              </Nav.Link>
              <Nav.Link href="#parent" className={styled.link}>
                PARENTS
              </Nav.Link>
              <Nav.Link href="#events" className={styled.link}>
                EVENTS
              </Nav.Link>
              <Nav.Link href="#gallery" className={styled.link}>
                GALLERY
              </Nav.Link>
              <Nav.Link href="#contactus" className={styled.link}>
                CONTACT US
              </Nav.Link>
              <Nav.Link href="#registration" className={styled.link}>
                REGISTRATION
              </Nav.Link>
              <Nav.Link href="#history" className={styled.link}>
                HISTORY
              </Nav.Link>
              <Nav.Link href="#login" className={styled.link}>
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
