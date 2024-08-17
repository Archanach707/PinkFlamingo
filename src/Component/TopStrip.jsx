import { Container, Row, Col } from "react-bootstrap";
// import '.././styles/variables.css';

const TopStrip = () => {
  return (
    <div id="topStrip">
      <Container>
        <Row>
          <Col>
            <div id="topStripInner">
              <p className="offer">
                QUICK BUY! Get up to 25% off on All Stones
              </p>
              <span className="cut">
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
