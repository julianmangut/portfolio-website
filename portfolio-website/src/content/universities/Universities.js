import './Universities.css'

import Row from 'react-bootstrap/Row'
import University from '../university/University'

function Universities() {

    return (
        <Row>
            <h2 id="education-text">Education</h2>
            <div id="universities-container">
                <University />
                <University />
            </div>
        </Row>
    )

}

export default Universities;