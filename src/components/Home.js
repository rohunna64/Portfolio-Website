import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homePic from './homePic.png';
import Typed from 'react-typed';


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
                        <img src={homePic} alt='outline'/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );

}

export default Home;
