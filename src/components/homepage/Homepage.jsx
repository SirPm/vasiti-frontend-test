import React from 'react'

import Header from '../header/Header'
import SubHeader from '../subheader/SubHeader'
import TestimonialBody from '../testimonial-body/TestimonialBody'
import TestimonialHeader1 from '../testimonial-header-1/TestimonialHeader1'
import TestimonialHeader2 from '../testimonial-header-2/TestimonialHeader2'
import VendorExperience from '../vendor-experience/VendorExperience'
import TestimonialsBody2 from '../testimonials-body-2/TestimonialsBody2'
import FooterHeader from '../footer-header/FooterHeader'
import FooterBody from '../footer-body/FooterBody'

const Homepage = () => {
    return (
        <div>
            <Header />
            <div id="subHeaderOuterDiv">
                <SubHeader />
            </div>
            <TestimonialHeader1 />
            <div id="testimonialHeader2OuterDiv">
                <TestimonialHeader2 />
            </div>
            <TestimonialBody />
            <div id="vendorExperienceOuterDiv">
                <VendorExperience />
            </div>
            <TestimonialsBody2 />
            <footer id="footer">
                <FooterHeader />
                <FooterBody />
            </footer>
        </div>
    )
}

export default Homepage
