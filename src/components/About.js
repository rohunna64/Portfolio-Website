import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import atlPic from './images/atlPic.jpg'
import resume from './resources/resumeRP.pdf';


function About() {
    return(
        <Container>

            <Row className='aboutTitle'>
                <Col md={12}>
                    <span>More About Me</span>
                </Col>
            </Row>
            <Row className='svgRow'>
                <svg className='miniRec'>
                    <rect width="170" height="2" x='65' y='1'/>
                </svg>
            </Row>
            <Row className="aboutContent">
                <Col className="aboutPic" md={6}>
                    <img className='atlPic' src={atlPic} alt="atlPic" />
                </Col>
                <Col className="aboutText" md={6}>
                    <p>I am a senior at Georgia Tech majoring in computer science, and my concentrations are in People (HCI) and Intelligence (AI/ML).</p>
                    <p>Previously, I was an web applications intern at Leaseplan USA, and soon, I will be joining American Express as an intern for the summer.</p>
                    <p>Some of my passions include music, dance, and sports.</p>
                    <a href={resume} target='_blank' className="button">DOWNLOAD MY RESUME</a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className='bgdAbout'>about</h1>
                </Col>
            </Row>
        </Container>

    );

}

export default About;
