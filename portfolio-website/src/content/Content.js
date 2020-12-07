import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import University from './university/University'

function Content() {
    return (
        <Row>

            <div id="universities-container">

                <University />

                <University />

            </div>

        </Row>

    )
}

export default Content;