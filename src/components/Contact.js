import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios'


class Contact extends React.Component {

    constructor(props) {
    	super(props);
        	this.state = {
          	name: '',
          	email: '',
          	message: ''
	   }
   }

   handleSubmit(event) {
       event.preventDefault();
       axios({
           method: "POST",
           url:"http://localhost:3000/send",
           data:  this.state
       }).then((response)=>{
           if (response.data.status === 'success'){
               alert("Message Sent.");
               this.resetForm()
           } else if(response.data.status === 'fail'){
               alert("Message failed to send.")
           }
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
                            <button type='submit' className="button">SEND MESSAGE</button>
                        </form>
                    </Col>
                    <h1 className='bgdContact'>contact</h1>
                </Row>
            </Container>
        );
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

}

export default Contact;
