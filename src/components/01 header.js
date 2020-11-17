import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className='header_contents col center'>
        <div className='logo'>
          <span>Photography</span>
        </div>
        <div className='nav-links row'>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='/work' className='link'>
            Work
          </Link>
          <Link to='/contact' className='link'>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
