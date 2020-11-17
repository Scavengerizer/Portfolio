import React from "react";
import img1 from "../assets/images/2.png";
import img2 from "../assets/images/3.png";
import img3 from "../assets/images/4.png";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div className='work'>
      <div className='container'>
        <div className='our_work_text'>
          <h6>Our work</h6>
        </div>
        <div className='work_contents row'>
          <div className='fixed_block'>
            <div className='fixed_block_contents'>
              <div className='icono-arrow1'></div>
              <div className='back_to_top'>
                <Link to='#'>Back To Top</Link>
              </div>
            </div>
          </div>
          <div className='work_samples'>
            <div className='sample row'>
              <div className='date_of_pic'>23/05/10</div>
              <div className='work_grid'>
                <div className='work_grid_1'>
                  <div className='pic_number'>
                    <span>01</span>
                  </div>
                  <div className='pic_heading'>
                    <span>Wild</span>
                    <br></br>
                    <span>Dazzle</span>
                  </div>
                </div>

                <div className='work_grid_2'>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took
                  </p>
                </div>

                <div className='work_grid_3'>
                  <div className='pic_image col center'>
                    <img src={img1} alt='' />
                  </div>
                </div>
              </div>
            </div>
            <div className='sample row'>
              <div className='date_of_pic'>04/02/20</div>
              <div className='work_grid'>
                <div className='work_grid_1'>
                  <div className='pic_number'>
                    <span>02</span>
                  </div>
                  <div className='pic_heading'>
                    <span>Augmented</span>
                    <br></br>
                    <span>Desire</span>
                  </div>
                </div>

                <div className='work_grid_2'>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took
                  </p>
                </div>

                <div className='work_grid_3'>
                  <div className='pic_image col center'>
                    <img src={img2} alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='sample row'>
              <div className='date_of_pic'>01/05/20</div>
              <div className='work_grid'>
                <div className='work_grid_1'>
                  <div className='pic_number'>
                    <span>03</span>
                  </div>
                  <div className='pic_heading'>
                    <span>Sumptuous</span>
                    <br></br>
                    <span>Structures</span>
                  </div>
                </div>

                <div className='work_grid_2'>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took
                  </p>
                </div>

                <div className='work_grid_3'>
                  <div className='pic_image col center'>
                    <img src={img3} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='work_message'>
          <p>
            Capture the picture perfect moments <br></br>
            with us, just a call away
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
