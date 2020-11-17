import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='row'>
          <div className='contact_sections'>
            <div className='contact_section1'>
              <span>Contact Us</span>
              <p>
                Fill up this form for a free subscription to our weekly
                newsletter.
              </p>
            </div>
            <div className='contact_section2 col'>
              <div className='contact_section2_contents col center'>
                <div className='red_line'></div>
                <div className='contact_buttons col center'>
                  <button className='stylish' data-text='Call us Now'>
                    Call us Now
                  </button>
                  <br />
                  <button className='stylish' data-text='Book a Session'>
                    Book a Session
                  </button>
                </div>
              </div>
            </div>
            <div className='contact_section3 col center'>
              <form>
                <div className='input_name row'>
                  <input
                    className='input_field input_name_text'
                    type='text'
                    id='fname'
                    name='fname'
                    placeholder='First Name'
                  ></input>

                  <input
                    className='input_field input_name_text'
                    type='text'
                    id='lname'
                    name='lname'
                    placeholder='Last Name'
                  ></input>
                </div>

                <br />
                <input
                  className='input_field'
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Email'
                ></input>
                <br />
                <input
                  className='input_field'
                  type='text'
                  id='phno'
                  name='phno'
                  placeholder='Phone Number'
                ></input>
                <br />
                <div className='checkbox row'>
                  <div className='custom_checkbox'>
                    <input type='checkbox'></input>
                    <span className='checkmark'></span>
                  </div>
                  <div className='label_text'>
                    <p>
                      By signing up, you agree to our{" "}
                      <Link to='#'>Privacy Policy</Link>
                      <br /> and <Link to='#'>Terms</Link> on how your data is
                      used.
                    </p>
                  </div>
                </div>

                <br />
                <button className='signup stylish' data-text='Sign Up'>
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
