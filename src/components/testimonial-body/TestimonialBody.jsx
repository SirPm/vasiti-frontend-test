import React from 'react'

import './testimonial-body.css'

const TestimonialBody = ({name, location, image, status, message}) => {
    return (
        <div className="testimonial-body">
            <img className="testimonial-picture" src={image} alt="profile picture"/>
            <span className="name">{name}</span>
            <div className="location-and-status">
                <span className="location">{location}</span>
                <span className={`${status === 'Customer' ? 'customer' : 'vendor'}`}>{status}</span>
            </div>            
            <span className="message">{message}</span>
        </div>
    )
}

export default TestimonialBody
