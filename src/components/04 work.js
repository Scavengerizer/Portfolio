import React, { useEffect } from "react";
import Rellax from "rellax";

function Work() {
  useEffect(() => {
    new Rellax(".img1", {
      speed: -5,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".img2", {
      speed: -5,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".img3", {
      speed: -5,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".img4", {
      speed: -5,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".case-text", {
      speed: 4,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <div className='work'>
      <div className='container'>
        <div className='col'>
          <div className='work-heading'>
            <h1>My Work</h1>
          </div>
          <div className='cases row'>
            <div className='case-section2'>
              <div className='case'>
                <div className='col'>
                  <h3>Home Decor</h3>
                  <div className='img-prop'>
                    <div className='img1'></div>
                  </div>
                </div>
              </div>

              <div className='case'>
                <div className='col'>
                  <h3>Photopics</h3>
                  <div className='img-prop'>
                    <div className='img3'></div>
                  </div>
                </div>
              </div>

              <div className='case-text'>
                <h4>The Code</h4>
                <p>
                  The design is coded into a<br></br> responsive website, loaded
                  <br></br> with subtle animations, having<br></br> a clean code
                  architecture.
                </p>
              </div>
            </div>
            <div className='case-section1'>
              <div className='case-text'>
                <h4>The Design</h4>
                <p>
                  Each website is uniquely<br></br> crafted with appealing
                  colour<br></br> combination and sleek and<br></br> catchy
                  design.
                </p>
              </div>

              <div className='case'>
                <div className='col'>
                  <h3>Gaming Website</h3>
                  <div className='img-prop'>
                    <div className='img2'></div>
                  </div>
                </div>
              </div>

              <div className='case'>
                <div className='col'>
                  <h3>KYC Interface</h3>
                  <div className='img-prop'>
                    <div className='img4'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
