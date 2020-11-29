import React from "react";
// import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='col'>
          <div className='contact-heading'>
            <h1>Contact Me</h1>
          </div>
          <div className='row'>
            <div className='contact-text'>
              <h3>Have a project idea in mind ? </h3>
              <h5>Let’s get started</h5>
              <div className='links'>
                <div className='link'>
                  <div className='row'>
                    <img src='' alt='' />
                    <a href='#'>Email</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='contact-image'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
