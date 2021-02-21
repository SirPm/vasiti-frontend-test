import React from 'react'

import './testimonials-body-1.css'
import { testimonials1 } from '../../json/testimonialsData'
import TestimonialBody from '../testimonial-body/TestimonialBody'

const TestimonialsBody1 = () => {
    return (
        <div className="testimonials-body general-width">
            {
                testimonials1.map( ({id, name, status, image, message, location}) => <TestimonialBody key={id} name={name} status={status} image={image} message={message} location={location} /> )
            }
        </div>
    )
}

export default TestimonialsBody1
