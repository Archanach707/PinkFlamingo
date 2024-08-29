import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../Nevigation/style.css";
import "./style.css";

const Nevigation = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <div className="nevigation">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Products</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Courses</Nav.Link>
                <Nav.Link href="#link">Blogs</Nav.Link>
                <Nav.Link href="#link">Videos</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Nevigation;
