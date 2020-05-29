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
                                A mobile application serving as a networking and resource hub for women working at Warner Media. She Got It is a social media platform developed to help connect female Warner Media employees with the goal of sharing insights and leveraging connections to succeed in the sports media industry.
                            </Card.Text>
                            <Card.Footer>
                                <Card.Link className="mb-2 text-muted">Ionic</Card.Link>
                                <Card.Link className="mb-2 text-muted">Angular</Card.Link>
                                <Card.Link className="mb-2 text-muted">Node.js</Card.Link>
                                <Card.Link className="mb-2 text-muted">MongoDB</Card.Link>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Barcelona Metro System</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Summer 2019</Card.Subtitle>
                            <Card.Text>
                                A web application modeling the Barcelona Metro System. The application has the ability to authorize login credentials, create users, add lines, add stations, leave reviews, etc.
                            </Card.Text>
                            <Card.Footer>
                                <a href='https://github.com/rohunna64/Barcelona-Metro-System' target='_blank'>
                                    <i id='projectLink' className="fa fa-github"></i>
                                </a>
                                <Card.Link className="mb-2 text-muted">Python (Flask)</Card.Link>
                                <Card.Link className="mb-2 text-muted">SQL</Card.Link>
                                <Card.Link className="mb-2 text-muted">HTML</Card.Link>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Donation Tracker</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Fall 2018</Card.Subtitle>
                            <Card.Text>
                                An android application to track donations made to many different donation facilities around Atlanta. Users are able to locate different facilities through the app's Google Maps integreation for map view and directions.
                            </Card.Text>
                            <Card.Footer>
                                <a href='https://github.com/rohunna64/DonationTracker' target='_blank'>
                                    <i id='projectLink' className="fa fa-github"></i>
                                </a>
                                <Card.Link className="mb-2 text-muted">Java</Card.Link>
                            </Card.Footer>
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
