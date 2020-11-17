import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='col v-center'>
        <div className='footer_logo'>
          <span>Photography</span>
        </div>
        <div className='footer_links'>
          <div className='row'>
            <Link to='#'>Home</Link>
            <Link to='#'>Work</Link>
            <Link to='#'>Contact US</Link>
          </div>
        </div>
        <div className='footer_policies'>
          <div className='row'>
            <Link to='#'>Copyright</Link>
            <Link to='#'>Privacy Policy</Link>
            <Link to='#'>Terms</Link>
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
