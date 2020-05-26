import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import NavBarBrand from 'react-bootstrap/NavBarBrand';
import Nav from 'react-bootstrap/Nav';
// import { Element, Scroll } from 'react-scroll';
// var ScrollLink = Scroll.ScrollLink;

import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
let Link = Scroll.Link;


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Rohan Bawa',
            headerLinks: [
                {title: 'Home', path: '/'},
                {title: 'About', path: '/about'},
                {title: 'Projects', path: '/projects'},
                {title: 'Contact', path: '/contact'}
            ],
            home: {
                title: "Hello, my name is Rohan Bawa"
            }
        }
    }

    render() {
        return (
            <Router>
                <Container className='p-0' fluid>

                    <NavBar position='sticky' expand='lg'>
                        <NavBar.Brand id='brand'>ROHAN</NavBar.Brand>

                        <NavBar.Toggle aria-controller='navbar-toggle'/>
                        <NavBar.Collapse id='navbar-toggle'>
                            <Nav className='ml-auto'>
                                <Link className='nav-link' offset={-150} smooth={true} duration={500} to='home'><p className="navLinks">Home</p></Link>
                                <Link className='nav-link' offset={-150} smooth={true} duration={500} to='about'><p className="navLinks">About</p></Link>
                                <Link className='nav-link' offset={-150} smooth={true} duration={500} to='projects'><p className="navLinks">Projects</p></Link>
                                <Link className='nav-link' smooth={true} duration={500} to='contact'><p className="navLinks">Contact</p></Link>
                            </Nav>
                        </NavBar.Collapse>
                    </NavBar>


                    <Element name='home'>
                        <Home />
                    </Element>

                    <Element name='about'>
                        <About />
                    </Element>

                    <Element name='projects'>
                        <Projects />
                    </Element>

                    <Element name='contact'>
                        <Contact />
                    </Element>

                    <Footer />

                </Container>

            </Router>
        );
    }

    handleScroll() {

    }
}

export default App;
