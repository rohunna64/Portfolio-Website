import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homePic from './homePic.png';
import Typed from 'react-typed';

import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
let Link = Scroll.Link;


function Home() {

    return(
        <React.Fragment>
            <Container>
                <Row className="homeRow">
                    <Col id="homeText" md={7}>
                        <span className='hello'>Hello, I am </span>
                        <span className='hello' id='name'>Rohan Bawa</span>
                        <br></br>
                        <span> I am a </span>
                        <Typed strings={['computer science major.', 'bollywood fusion dancer.', 'sports enthusiast.']}
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
            <div className='arrowDiv'>
                <img class="arrow" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png" />
            </div>
        </React.Fragment>
    );

}

export default Home;
