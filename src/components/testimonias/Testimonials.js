import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase />
              Staxx
            </i>
            <p className="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, debitis. Pariatur saepe consectetur eligendi nulla,
              veritatis dolor odio rem unde temporibus sapiente ex blanditiis!
              Numquam!
            </p>
            <div className="name">
              <p>Max Musterman</p>
              <p>Geo Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
