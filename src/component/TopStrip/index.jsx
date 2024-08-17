import { Container, Row, Col } from "react-bootstrap";
import "../TopStrip/style.css";

const TopStrip = () => {
  const closeStrip = () => {
    const topStrip = document.querySelector("#topStrip");
    topStrip.style.display = "none";
  };

  return (
    <div id="topStrip">
      <Container>
        <Row>
          <Col>
            <div id="topStripInner">
              <p className="offer">
                QUICK BUY! Get up to 25% off on All Stones
              </p>
              <span className="close" onClick={closeStrip}>
                <img src="../src/assets/images/icons/cut.svg" alt="" />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopStrip;
