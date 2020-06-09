import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Axios from 'axios';

class Contact extends React.Component {

    constructor(props) {
    	super(props);
        this.state = {
          	name: '',
          	email: '',
          	message: '',
            disabled: false,
            emailSent: null,
	   }
   }

   onNameChange(event) {
       this.setState({name: event.target.value})
   }

   onEmailChange(event) {
       this.setState({email: event.target.value})
   }

   onMessageChange(event) {
       this.setState({message: event.target.value})
   }

   handleSubmit(event) {
       event.preventDefault();

       this.setState({
           disabled: true,
           emailSent: false
       });

       Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

   }

   resetForm() {
       this.setState({name: '', email: '', message: ''})
   }

    render() {
        return (
            <Container>
                <Row className='aboutTitle'>
                    <Col md={12}>
                        <span>Let's Talk</span>
                    </Col>
                </Row>
                <Row className='svgRow'>
                    <svg className='miniRec'>
                        <rect width="100" height="2" x='100' y='1'/>
                    </svg>
                </Row>
                <Row>
                    <Col className='contactText' md={6}>
                        <span className='subContact'>I am available for freelance work.</span>
                        <br></br>
                        <span className='subContact2'>Send me a message!</span>
                    </Col>
                    <Col className='formCol' md={6}>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group">
                                <label for="name2">Name</label>
                                <input type="text" id="name2" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                            </div>
                            <div className='form-group'>
                                <label for="email">Email</label>
                                <input type="text" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                            </div>
                            <div className='form-group'>
                                <label for="message">Message</label>
                                <textarea id='message' rows="8" cols='50' value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                            </div>
                            <button type='submit' className="button" disabled={this.state.disabled}>SEND MESSAGE</button>

                            {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent.</p>}

                        </form>
                    </Col>
                    <h1 className='bgdContact'>contact</h1>
                </Row>
            </Container>
        );
    }



}

export default Contact;
