import React from 'react';
import { Container } from 'reactstrap';
import './contact.scss';

function Contact() {
  return (
    <div className='contact'>
      <Container className='contact-container'>
        <h1>For ordering please contact me</h1>
        <span>This is how you can reach me...</span>
        <div className='boxes'>
          <div>
            <span>Email: </span>mail@mail.com
          </div>
          <div>
            <span>Number: </span>123456789
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
