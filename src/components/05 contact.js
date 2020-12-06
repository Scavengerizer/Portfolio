import React from "react";
import email from "../assets/svg/email.svg";
import behance from "../assets/svg/behance.svg";
import linkedin from "../assets/svg/linkedin.svg";
import github from "../assets/svg/github.svg";
import contact_image from "../assets/images/contact.png";

function Contact() {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='col'>
          <div className='contact-heading'>
            <h1>Contact Me</h1>
          </div>
          <div className='contact-contents row'>
            <div className='contact-text'>
              <h3>Have a project idea in mind ? </h3>
              <h5>Let’s get started</h5>
              <div className='links'>
                <div className='link'>
                  <div className='row center'>
                    <img src={email} alt='' />
                    <a href='#'>Email</a>
                  </div>
                </div>
                <div className='link'>
                  <div className='row'>
                    <img src={behance} alt='' />
                    <a href='#'>Behance</a>
                  </div>
                </div>
                <div className='link'>
                  <div className='row'>
                    <img src={linkedin} alt='' />
                    <a href='#'>Linkedin</a>
                  </div>
                </div>
                <div className='link'>
                  <div className='row'>
                    <img src={github} alt='' />
                    <a href='#'>Github</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='contact-image'>
              <img src={contact_image} alt='' />
            </div>
          </div>
          <div className='resume'>
            <div className='btn'>
              <a href='https://drive.google.com/file/d/1Ph9EEcVAdz_x4dmdnqAXL5XhOqy-hYU0/view?usp=sharing'>
                My Resume
              </a>
              <div className='bg'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
