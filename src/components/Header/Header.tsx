import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from './Header.module.css'
function Header() {
  return (
    <div style={{position:'absolute',width:'100%',zIndex:'3'}}>
        <Navbar expand="md" >
        <Container>
          <Navbar.Brand href="#home" className={styled.link}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={styled.link}>Home</Nav.Link>
              <Nav.Link href="#link" className={styled.link}>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
      
  );
}

export default Header;
