import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/VetService/" className="fw-bold mx-3">HOME</Nav.Link>
            <Nav.Link as={Link} to="/VetService/" className="fw-bold mx-3">ABOUT US</Nav.Link>
            <NavDropdown title="OUR SERVICES" className="fw-bold mx-3" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/VetService/Emergency">24/7 Emergency</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/VetService/Surgery">Surgery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/VetService/Vaccination">Vaccination</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/VetService/Dentistry">Dentistry</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/VetService/Contact" className="fw-bold mx-3">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;