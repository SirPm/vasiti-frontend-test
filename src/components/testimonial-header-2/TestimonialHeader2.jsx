import React from 'react'

import './testimonial-header-2.css'
import BeautifulBlackLadies from '../../assets/black-beautiful-ladies-smiling.svg'
import FullBlackEllipse from '../../assets/full-black-ellipse.svg'
import OrangeUnderline from '../../assets/orange-underline.svg'
import { Link } from "react-router-dom";

const TestimonialHeader2 = () => {
    return (
        <div className="testimonial-header-2 general-width">
            <div id="imageDiv2">
                <img className="full-black-ellipse" src={FullBlackEllipse} alt="full black ellipse"/>
                <img className="black-ladies" src={BeautifulBlackLadies} alt="beautiful black ladies"/>
            </div>
            <div id="textDiv2">
                <h2>Tolu & Joy’s Experience</h2>
                <span id="customer">Customer</span>
                <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                <Link to="/testimonial" id="textDiv2Footer">
                    <span>Share your own story!</span>
                    <img src={OrangeUnderline} alt="underline text div2"/>
                </Link>                
            </div>
        </div>
    )
}

export default TestimonialHeader2
