import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" style={{backgroundColor: 'rgb(82, 81, 81)', flexGrow: 1}}>
      <Container>
        <Navbar.Brand href="#home" style={{color: 'white', fontSize: '22px'}}>Data Visualization Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{position: 'absolute', right: '150px'}}>
            <Nav.Link href="#home" style={{color: 'white'}}>Home</Nav.Link>
            <NavDropdown id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;