import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Mynav() {
  return (<>
    {[  'xl'].map((expand) => (
      <Navbar key={expand} expand={expand} className="mb-3" bg="black" variant="dark">

        <Container fluid>
        <Navbar.Brand href="#home" className='ms-3'>Tadeit</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            data-bs-theme="dark"
            
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Feauters</Nav.Link>
                <Nav.Link href="#action2">Pricing</Nav.Link>
                <Nav.Link href="#action2">Portfolio</Nav.Link>
                <Nav.Link href="#action2">Dashboard</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
    </>
  );
}

export default Mynav;
