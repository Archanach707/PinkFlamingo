import * as React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  return (
    <>
    <div id='topStrip' className='App'>
      <Container>
        <Row>
          <Col>
            <p className='text-center my-2'>QUICK BUY! Get up to 25% off on All Stones</p>
            <span><img src="../src/assets/images/icons/cut.svg" alt="" /></span>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default App
