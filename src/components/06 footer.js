import React from "react";
import email from "../assets/svg/email.svg";
import behance from "../assets/svg/behance.svg";
import linkedin from "../assets/svg/linkedin.svg";
import github from "../assets/svg/github.svg";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='col v-center'>
        {/* <div className='footer_logo'>
          <span>Photography</span>
        </div> */}
        <div className='footer_links'>
          <div className='row'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Work</a>
            <a href='#'>Contact</a>
          </div>
        </div>
        <div className='footer_pics'>
          <div className='row'>
            <img src={email} alt='' />
            <img src={behance} alt='' />
            <img src={linkedin} alt='' />
            <img src={github} alt='' />
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
