import React from 'react';
import './contact.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div>
              <h2>Get in touch</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus laboriosam nulla hic aliquid. Sequi hic dignissimos
                omnis maxime ipsa fuga rerum eos quos perferendis laboriosam!
              </p>
            </div>
            <div className="address">
              <p>Johannesstr. 24</p>
              <p>72458 Albstadt</p>
            </div>
            <div className="icons">
              <FaPhone style={{ marginRight: '1rem' }} />
              <p>(+49)163 926 2582</p>
            </div>
            <div className="icons">
              <FaEnvelope style={{ marginRight: '1rem' }} />
              <p>bobomurod-85@mail.ru</p>
            </div>
            <div className="careers">
              <p>
                Looking for careers? <span>View all jop openings</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form action="">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea
              name="Message"
              placeholder="Message"
              cols="25"
              rows="10"
            ></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                Lorem ipsum dolor sit amet. <span>Lorem ipsum dolor sit.</span> Lorem, ipsum
                dolor. <span>Lorem consectetur adipisicing.</span>
              </p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
