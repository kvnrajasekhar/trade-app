import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Mynav() {
  return (
    <div className="Navbar">
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Tradeit</Navbar.Brand>
          <Nav className="me-auto" style={{}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#">portfolio</Nav.Link>
            <Nav.Link href="#">Dashboard</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Mynav;
