import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Header from './header/Header'
import Universities from './content/universities/Universities'
import About_me from './content/about_me/About_me'

function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <About_me />
      </Row>
      <br />
      <br />
      <Universities />  
    </Container>
  );
}

export default App;
