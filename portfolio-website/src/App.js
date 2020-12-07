import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Header from './header/Header'

function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
    </Container>
  );
}

export default App;
