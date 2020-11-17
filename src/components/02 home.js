import React from "react";
import img1 from "../assets/images/1.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <div className='home_contents row'>
          <div className='home_text col h-center'>
            <div className='home_title col'>
              <span>Simple</span>
              <span>and</span>
              <span>Unique</span>
            </div>
            <div className='home_hireme'>
              <Link to='#' className='stylish' data-text='Hire Us'>
                Hire Us
              </Link>
            </div>
          </div>
          <div className='home_pics'>
            <img src={img1} alt='' />
          </div>
        </div>
        <div className='home_message'>
          <p>
            We make photography look<br></br>
            effortless and stunning
          </p>
        </div>
      </div>

      <div className='overlay'>
        <div className='overlay-text'>
          <div className='hide'>
            <span className='text-show'>A great space for all the</span>
          </div>
          <div className='hide'>
            <span className='text-show'>photographers looking to</span>
          </div>
          <div className='hide'>
            <span className='text-show'>showcase their work</span>
          </div>
        </div>
      </div>
      <div className='slider'></div>
    </div>
  );
}

export default Home;
