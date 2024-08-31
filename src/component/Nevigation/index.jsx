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
                      Jar Cones
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.2">
                      Chandan Bamboo Dhoop
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.3">
                      Backflow Cone Dhoop
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.4">
                      Buddha Red Incense Cone
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.5">
                      Ountain Sandal Dhoop
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.6">
                      Cone Sandal Dhoop
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#action/1.1">
                    Incense Holders
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.2">
                    Yantras
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.3">
                    Incense Sticks
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.4">
                    Pooja Thali Sets
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.5">Shankh</NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.6">Kalash</NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.7">
                    Book Rests
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
