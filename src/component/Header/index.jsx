import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Stack,
  Button,
} from "react-bootstrap";
import TopStrip from "../TopStrip";
import "./style.css";

const Header = () => {
  return (
    <>
      <TopStrip />
      <div id="Header" className="py-3">
        <Container>
          <Row>
            <Col>
              <Image src="../src/assets/images/logo.svg" alt="" />
            </Col>
            <Col>
              <Stack direction="horizontal">
                <span className="location">Deliver to 110094</span>
                <Form.Control
                  className="me-auto"
                  placeholder="Search for medication & Wellness products.."
                />
              </Stack>
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
                  <span className="sign-in">SIGN IN / SIGN UP</span>
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
