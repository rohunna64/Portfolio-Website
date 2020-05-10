import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function About() {
    return(
        <Container>
            <Row className="aboutRow">
                <Col className="aboutText">
                    <p>I am a senior at Georgia Tech </p>
                </Col>
                <Col className="aboutPic">
                </Col>
            </Row>
        </Container>

    );

}

export default About;
