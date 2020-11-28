import React from "react";

function Work() {
  return (
    <div className='work'>
      <div className='container'>
        <div className='col'>
          <div className='work-heading'>
            <h1>My Work</h1>
          </div>
          <div className='cases row center'>
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
                  <h3>Home Decor</h3>
                  <div className='col center img-prop'>
                    <div className='img1'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='case-section2'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
