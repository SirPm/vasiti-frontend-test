import React from 'react'

import './testimonial-header-1.css'
import HalfPink from '../../assets/half-pink-ellipse.svg'
import TestimonialImageHeader from '../../assets/testimonial-image-header.svg'


const TestimonialHeader1 = () => {
    return (
        <div className="testimonial-header-1 general-width">
            <div id="textDiv">
                <h1>Amazing Experiences from Our Wonderful Customers</h1>
                <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>
            <div id="imageDiv">
                <img className="half-pink" src={HalfPink} alt="half pink"/>
                <img className="testimonial-image-header" src={TestimonialImageHeader} alt="testimonial image header"/>
            </div>
        </div>
    )
}

export default TestimonialHeader1
