import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.scss';

// COMPONENTS
import Modal from './components/modal/modal';
import Header from './components/header/header';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Row>
          <Col sm={6}>
            <Modal></Modal>
          </Col>
          <Col sm={6}>
            Otra cosa
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
