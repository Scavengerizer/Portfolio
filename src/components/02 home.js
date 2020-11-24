import React from "react";
import landing_image from "../assets/svg/limage.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <div className='row home-content'>
          <div className='home-text'>
            <h2>I can</h2>
            <br></br>
            <h1>Design</h1>
            <p>
              Hi, I am Himanshu Goel. I am a UI/UX<br></br> Designer and a
              Front-end Developer.
            </p>
            <div className='btn'>
              <a className='hello'>
                <span></span>See my work
              </a>
            </div>
          </div>
          <div className='home-pic'>
            <img src={landing_image} alt='' />
          </div>
        </div>
        <div className='scroll-anim'></div>
      </div>
    </div>
  );
}

export default Home;
