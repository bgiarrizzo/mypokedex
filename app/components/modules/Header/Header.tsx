import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MyReactPokedex</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">1st Gen</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
  </>
);

export default Header;
