import * as React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {

  return (
    <>
    <div className='App'>
        <h1>hello</h1>
        <Button variant="primary">Primary</Button>{' '}
        <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default App
