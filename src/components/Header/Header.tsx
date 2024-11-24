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
  // const [activeNav,setActiveNav]=useState('')
  const [subNavbarData, setSubNavbarData] = useState<Array<NavbarData>>([]);
  // const [subNavbarData, setSubNavbarData] = useState([]);
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
      console.log("Clicked outside NavbarCard");
      setShowCard(false);
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

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", changeNavbarColor);
  let bgColor = styled.transpparent;
  let navbarBrand = styled.brand;
  let navbarBrandImg = `d-inline-block align-top ${styled.brandImg}`;
  let navbarSchool = styled.school;
  if (colorChange || screenWidth < 1200) {
    bgColor = styled.navbarScrolled;
    navbarBrand = styled.navbarBrandScrolled;
    navbarBrandImg = `d-inline-block align-top ${styled.navbarBrandImgScrolled}`;
  }

  return (
    <div>
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
                return (
                  <Nav.Link
                    href={`#${item.id}`}
                    className={`${styled.link} px-3`}
                    key={item.id}
                    id={item.id}
                    onMouseEnter={handleNavHover}
                  >
                    {item.text}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
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
              <Nav.Link href="#aboutus" className={`${styled.link} px-3`}>
                ABOUT US
              </Nav.Link>
              <Nav.Link href="#MPD" className={`${styled.link} px-3`}>
                MPD
              </Nav.Link>
              {/* <Nav.Link href="#parent" className={`${styled.link} px-3`}>
                PARENTS
              </Nav.Link> */}
              <NavDropdown title="PARENTS" id="navbarScrollingDropdown" className={`${styled.link} px-3`}>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#events" className={`${styled.link} px-3`}>
                EVENTS
              </Nav.Link>
              <Nav.Link href="#gallery" className={`${styled.link} px-3`}>
                GALLERY
              </Nav.Link>
              <Nav.Link href="#contactus" className={`${styled.link} px-3`}>
                CONTACT US
              </Nav.Link>
              <Nav.Link href="#registration" className={`${styled.link} px-3`}>
                REGISTRATION
              </Nav.Link>
              <Nav.Link href="#history" className={`${styled.link} px-3`}>
                HISTORY
              </Nav.Link>
              <Nav.Link href="#login" className={`${styled.link} px-3`}>
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

// commented code for dropdown

{
  /* <Nav>
<NavDropdown
  title="ABOUT US"
  id="nav-dropdown"
  className={`${styled.link} px-3`}
>
  <div
    style={{ width: "550px", height: "200px", opacity: "0.8",display:'flex' }}
  >

    <Tabs
      defaultActiveKey="home"
      id="custom-tabs"
      className={styled.customTabs}
    >
      <Tab eventKey="ABOUT_DEV_SAMAJ" title="ABOUT DEV SAMAJ" >
        <div className={styled.tabContent}>
          <h2>ABOUT DEV SAMAJ</h2>
          <p>This is the content for the Home tab.</p>
        </div>
      </Tab>
      <Tab eventKey="PHOTO_GALERY" title="PHOTO GALERY">
        <div className={styled.tabContent}>
          <h2>PHOTO GALERY</h2>
          <p>This is the content for the Profile tab.</p>
        </div>
      </Tab>
      <Tab eventKey="VIDEO_GALLERY" title="VIDEO GALLERY">
        <div className={styled.tabContent}>
          <h2>VIDEO GALLERY</h2>
          <p>This is the content for the Contact tab.</p>
        </div>
      </Tab>
    </Tabs>
  </div>
</NavDropdown> */
}
