
import './App.css';
import  Menu  from './components/nav/Menu'
import { Row, Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Menu></Menu>
      </Row>
    </Container>

  );
}

export default App;
