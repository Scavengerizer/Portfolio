import React from "react";
import email from "../assets/svg/email.svg";
import behance from "../assets/svg/behance.svg";
import linkedin from "../assets/svg/linkedin.svg";
import github from "../assets/svg/github.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='col v-center'>
        <div className='footer_links'>
          <div className='row'>
            <Link to='/' className='link'>
              Home
            </Link>
            <Link to='/about' className='link'>
              About
            </Link>
            <Link to='/work' className='link'>
              Work
            </Link>
            <Link to='/contact' className='link'>
              Contact
            </Link>
          </div>
        </div>
        <div className='footer_pics'>
          <div className='row'>
            <a
              href='mailto:himanshugoel523@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={email} alt='' />
            </a>
            <a
              href='https://www.behance.net/himanshugoel1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={behance} alt='' />
            </a>
            <a
              href='https://www.linkedin.com/in/himanshu-goel-b239681b4/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={linkedin} alt='' />
            </a>
            <a
              href='https://github.com/Scavengerizer'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={github} alt='' />
            </a>
          </div>
        </div>
        <div className='footer_copyright'>
          <span>Copyright © 2020 . All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
