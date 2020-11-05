import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/wrapper';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (

<Container>
      <Row className='justify-content-center'>
        <Col lg={6} xs={12}>
        <br/><br/>
          <h1 >Todo redux</h1><br/><br/><br/>
          <Wrapper  />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
