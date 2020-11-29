import React from "react";
import pic from "../assets/images/pic.png";

function About() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
          <div className='about-text'>
            <h1>About Me</h1>
            <p>
              I am an Indian <b>designer</b> and <br></br> <b>developer</b> who
              focuses on creating<br></br>
              unique and visually pleasing<br></br> responsive UI/UX designs and
              <br></br> bringing them to life via code.
            </p>
            <div className='btn'>
              <a>More about me</a>
              <div className='bg'></div>
            </div>
          </div>
          <div className='about-pic col center'>
            <img src={pic} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
