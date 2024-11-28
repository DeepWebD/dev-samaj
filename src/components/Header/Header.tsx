import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "./Header.module.css";
import Logo from "../../assets/image/logo.png";
import { useEffect, useRef, useState } from "react";
import NavbarCard from "./NavbarCard/NavbarCard";

import navbarData from "./Navbar";
import { NavbarData } from "./Types";
import { NavDropdown } from "react-bootstrap";

function Header() {
  const [colorChange, setColorchange] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showCard, setShowCard] = useState(false);
  const [subNavbarData, setSubNavbarData] = useState<Array<NavbarData>>([]);
  const navbarCardRef = useRef<HTMLDivElement>(null);

  const handleNavHover = (e: any) => {
    setShowCard(true);
    navbarData.map((item) => {
      if (item.id === e.target.id) {
        if (item.subNavbar) {
          setSubNavbarData(item.subNavbar as NavbarData[]);
        }
      }
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarCardRef.current &&
      !navbarCardRef.current.contains(event.target as Node)
    ) {
      setShowCard(false);
      setSubNavbarData([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  //scroll controller
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", changeNavbarColor);
  let bgColor = styled.transpparent;
  let navbarBrand = styled.brand;
  let navbarBrandImg = `d-inline-block align-top ${styled.brandImg}`;
  let navbarSchool = styled.school;
  let navLike = styled.link;
  let schoolName = styled.name;
  let schoolLocation = styled.location;
  if (colorChange || screenWidth < 1200) {
    bgColor = styled.navbarScrolled;
    navbarBrand = styled.navbarBrandScrolled;
    navbarBrandImg = `d-inline-block align-top ${styled.navbarBrandImgScrolled}`;
    navLike = styled.linkScrolled;
    schoolName = styled.nameSrolled;
    schoolLocation = styled.locationSrcolled;
  }

  return (
    <div>
      {/* Navbar Card */}
      <div
        style={{ display: showCard && screenWidth > 1200 ? "block" : "none" }}
      >
        <div ref={navbarCardRef}>
          <NavbarCard subNavbarData={subNavbarData} />
        </div>
      </div>
      {/* large screen navbar */}
      <Navbar
        fixed="top"
        expand="xl"
        className={bgColor}
        style={{ display: screenWidth > 1200 ? "flex" : "none" }}
      >
        <Container style={{ maxWidth: "96%" }}>
          <Navbar.Brand href="#home" className={navbarBrand}>
            <img alt="" src={Logo} className={navbarBrandImg} />
            <div className={navbarSchool}>
              <div className={schoolName}>Dev Samaj School</div>
              <div className={schoolLocation}>Sukhdev Vihar(New Delhi)</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {navbarData.map((item) => {
                return (
                  <Nav.Link
                    className={navLike}
                    key={item.id}
                    id={item.id}
                    onMouseEnter={handleNavHover}
                  >
                    {item.text}
                  </Nav.Link>
                );
              })}
              <div className="d-flex mx-3">
                <a href="#login" className={styled.login}> Login</a>
                <a href="#contact" className={styled.contact}>Contact</a>
              </div>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>

      {/* small screen navbar */}

      <Navbar
        fixed="top"
        expand="xl"
        className={bgColor}
        style={{ display: screenWidth < 1200 ? "flex" : "none" }}
      >
        <Container style={{ maxWidth: "96%" }}>
          <Navbar.Brand href="#home" className={navbarBrand}>
            <img alt="" src={Logo} className={navbarBrandImg} />
            <div className={navbarSchool}>
              <div className={styled.name}>Dev Samaj School</div>
              <div className={styled.location}>Sukhdev Vihar(New Delhi)</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {navbarData.map((item) => {
                if (item.subNavbar !== null) {
                  return (
                    <NavDropdown
                      title={item.text}
                      key={item.id}
                      className={styled.navLink}
                    >
                      {item.subNavbar.map((subItem) => {
                        return (
                          <NavDropdown.Item
                            key={subItem.id}
                            className={styled.dropdownItem}
                          >
                            {subItem.text}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  );
                } else if (item.subNavbar === null) {
                  return (
                    <Nav.Link href={`${item.id}`} className={styled.navLink}>
                      {item.text}
                    </Nav.Link>
                  );
                }
              })}
              <Nav.Link href="#login" className={styled.navLink}>
                Login
              </Nav.Link>
              <Nav.Link href="#contact" className={styled.navLink}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
