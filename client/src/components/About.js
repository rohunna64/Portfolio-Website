import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import atlPic from './images/atlPic.jpg'
import resume from './resources/resumeWebsite.pdf';


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
                    <p>I am a senior at Georgia Tech majoring in computer science with concentrations in People (HCI) and Intelligence (AI/ML). I will be graduating in May 2021 with my bachelors in CS as well as a certificate in finance.</p>
                    <p>Previously, I was a web applications intern at Leaseplan USA, and soon, I will be joining American Express as an intern for the summer. I am proficient in Python, Java, HTML, and CSS, and I have experience working with JavaScript libraries like React, Node, and Angular. Along with that, I am skilled in Photoshop, Illustrator, Premiere Pro, and After Effects.</p>
                    <p>I have a passion for creating well designed applications. My focus with any project is not only on its functionality but also in ensureing that it looks nice and is easy to use for the average person.</p>
                    <a href={resume} target='_blank' className="button">DOWNLOAD MY RESUME</a>
                </Col>

            </Row>
            <Row>
                <h1 className='bgdAbout'>about</h1>
            </Row>
        </Container>

    );

}

export default About;
