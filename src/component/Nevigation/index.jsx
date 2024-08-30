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
                <Nav.Link href="#action1" active>
                  Home
                </Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown
                    title="Dhoop Cones"
                    id="basic-nav-dropdown2"
                    className="dropend"
                  >
                    <NavDropdown.Item href="#action/2.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.3">
                      Something
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#action/1.1">
                    Action1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.2">
                    Action2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.3">
                    Action3
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#3">Services</Nav.Link>
                <Nav.Link href="#4">Courses</Nav.Link>
                <Nav.Link href="#5">Blogs</Nav.Link>
                <Nav.Link href="#6">Videos</Nav.Link>
                <Nav.Link href="#7">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Nevigation;
