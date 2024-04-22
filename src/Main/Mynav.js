import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './nav.css';

function Mynav() {
  return (<>
    {[  'xl'].map((expand) => (
      <Navbar key={expand} expand={expand} className="mb-3 navbar-nav navabar"  variant="" id='navbar'>
        <Container fluid className='nav-container'>
        <Navbar.Brand href="#home" className='ms-3 nav-links'>Tradeit</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            data-bs-theme="dark"
            className='navbar-offcanvas'
          >
            <Offcanvas.Header className='offcanvas-title'   closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='offcanvas-title-text'>
                Tradeit
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='offcanvas-body'>
              <Nav className="justify-content-end flex-grow-1 pe-3  nav-items">
                <Nav.Link id='nav-link' className='nav-links' href="home">Home</Nav.Link>
                <Nav.Link id='nav-link' className='nav-links' href="#action2">Portfolio</Nav.Link>
                <Nav.Link id='nav-link' className='nav-links' href="Homecrypto">Dashboard</Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
    </>
  );
}

export default Mynav;
