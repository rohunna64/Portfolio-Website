import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

function Projects() {
    return (
        <Container>
            <Row className='aboutTitle'>
                <Col md={12}>
                    <span>Some of My Latest Work</span>
                </Col>
            </Row>
            <Row className='svgRow'>
                <svg className='miniRec'>
                    <rect width="170" height="2" x='65' y='1'/>
                </svg>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>She Got It</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Spring 2020</Card.Subtitle>
                            <Card.Text>
                                Mobile application serving as a networking and resource hub for women working at Warner Media.
                            </Card.Text>
                            <div className='cardFooter'>
                                <Card.Link className="mb-2 text-muted">Ionic</Card.Link>
                                <Card.Link className="mb-2 text-muted">Angular</Card.Link>
                                <Card.Link className="mb-2 text-muted">Node.js</Card.Link>
                                <Card.Link className="mb-2 text-muted">MongoDB</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Barcelona Metro System</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Summer 2019</Card.Subtitle>
                            <Card.Text>
                                Web application modeling the Barcelona Metro System with ability to authorize login credentials, create users, add lines, add stations, leave reviews, etc.
                            </Card.Text>
                            <div className='cardFooter'>
                                <a href='https://github.com/rohunna64/Barcelona-Metro-System' target='_blank'>
                                    <i id='projectLink' className="fa fa-github"></i>
                                </a>
                                <Card.Link className="mb-2 text-muted">Python (Flask)</Card.Link>
                                <Card.Link className="mb-2 text-muted">SQL</Card.Link>
                                <Card.Link className="mb-2 text-muted">HTML</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Donation Tracker</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fall 2018</Card.Subtitle>
                            <Card.Text>
                                Android application to track donations made to many different donation facilities and includes Google Maps integreation for map view and directions.
                            </Card.Text>
                            <div className='cardFooter'>
                                <a href='https://github.com/rohunna64/DonationTracker' target='_blank'>
                                    <i id='projectLink' className="fa fa-github"></i>
                                </a>
                                <Card.Link className="mb-2 text-muted">Java</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>



            <Row>
                <Col>
                    <h1 className='bgdProjects'>projects</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;


// Project Title
// Short description
// Github repository
//

// She Got It
// Barcelona Metro System
// Donation Tracker
