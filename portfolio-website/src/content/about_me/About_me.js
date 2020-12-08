import './About_me.css'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function About_me() {
    return (
        <div id="container-about">
            <h1 id="about-me-text">About me</h1>
            <Col xs={8} id="about-me-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin est sed quam sollicitudin volutpat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin est sed quam sollicitudin volutpat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin est sed quam sollicitudin volutpat.</p>
            </Col>
        </div>
    )
}

export default About_me;