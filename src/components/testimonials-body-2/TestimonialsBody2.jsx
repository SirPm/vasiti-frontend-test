import React from 'react'

import './testimonials-body-2.css'
import { testimonials2 } from '../../json/testimonialsData'
import TestimonialBody from '../testimonial-body/TestimonialBody'

const TestimonialsBody2 = () => {
    return (
        <div className="testimonials-body general-width">
            {
                testimonials2.map( ({id, name, status, image, message, location}) => <TestimonialBody key={id} name={name} status={status} image={image} message={message} location={location} /> )
            }
        </div>
    )
}

export default TestimonialsBody2
