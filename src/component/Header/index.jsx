import { Container, Row, Col, Image, Form, Stack } from "react-bootstrap";
import TopStrip from "../TopStrip";
import "./style.css";

const Header = () => {
  return (
    <>
      <TopStrip />
      <div id="Header" className="py-4">
        <Container>
          <Row>
            <Col>
              <Image src="../src/assets/images/logo.svg" alt="" />
            </Col>
            <Col className="col-12 col-md-5 col-lg-6 order-last order-md-0 mt-3 mt-md-0">
              <div className="search-bar-wrap">
                <Stack direction="horizontal">
                  <div className="location">
                    <Image
                      src="../src/assets/images/icons/location.svg"
                      alt=""
                      className="location-img"
                    />
                    <span>Deliver to 110094</span>
                  </div>
                  <Form.Control
                    className="me-auto search-bar-input"
                    placeholder="Search for medication & Wellness products.."
                  />
                </Stack>
                {/* <div className="search-bar">
                  <Image src="../src/assets/images/icons/search.svg" alt="" />
                </div> */}
              </div>
            </Col>
            <Col>
              <div id="icons">
                <span>
                  <Image
                    src="../src/assets/images/icons/cart.svg"
                    alt=""
                    className="icons"
                  />
                </span>
                <span>
                  <Image
                    src="../src/assets/images/icons/user.svg"
                    alt=""
                    className="user-icon"
                  />
                  <span className="sign-in d-md-inline-block d-none">
                    SIGN IN / SIGN UP
                  </span>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
