import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {

    return(
        <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Container>
                <Row>
                    <Col align="center">
                        <a href='https://www.linkedin.com/in/rohan-bawa'>
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href='https://github.com/rohunna64'>
                            <i className="fa fa-github"></i>
                        </a>
                        <a href='https://www.behance.net/rohanbawa63fce'>
                            <i className="fa fa-behance"></i>
                        </a>
                        <a href='https://www.facebook.com/rohan.bawa'>
                            <i className="fa fa-facebook"></i>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col id='copyright' align="center">
                        Copyright © Rohan Bawa 2020
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;
