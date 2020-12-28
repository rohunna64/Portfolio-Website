import arrow from './images/arrow.png';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homePic from './images/homePic.png';
import Typed from 'react-typed';

import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
let Link = Scroll.Link;


function Home() {

    return(
        <React.Fragment>
            <Container className='homeStuff'>
                <Row className="homeRow">
                    <Col id="homeText" md={7}>
                        <span className='hello'>Hello, I am </span>
                        <span className='hello' id='name'>Rohan Bawa</span>
                        <br></br>
                        <span> I am a </span>
                        <Typed strings={['front-end developer.', 'bollywood fusion dancer.', 'sports enthusiast.']}
                             typeSpeed={40}
                             backSpeed={20}
                             backDelay={2000}
                             loop
                        />
                    </Col>
                    <Col id='homePic' md={5} className='text-center'>
                        <img className='homePic' src={homePic} alt='outline'/>
                    </Col>
                </Row>
            </Container>
            <Link offset={-110} smooth={true} duration={500} to='about'>
                <div className='arrowDiv'>
                    <img class="scrollArrow" src={arrow} />
                </div>
            </Link>
        </React.Fragment>
    );

}

export default Home;
