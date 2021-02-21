import React from 'react'

import './vendor-experience.css'
import WomanShoppingBag from '../../assets/woman-shoppingbag-card.svg'
import FullPinkEllipse from '../../assets/full-pink-ellipse.svg'
import OrangeUnderline from '../../assets/orange-underline.svg'
import { Link } from "react-router-dom";

const VendorExperience = () => {
    return (
        <div className="vendor-experience general-width">
            <div id="textDiv3">
                <h2>Josiah’s Experience</h2>
                <span id="vendor">Vendor</span>
                <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                <Link to="/testimonial" id="textDiv2Footer">
                    <span id="vendorExperience">Share your own story!</span>
                    <img src={OrangeUnderline} alt="underline text div2"/>
                </Link>                
            </div>
            <div id="imageDiv2">
                <img className="full-pink-ellipse" src={FullPinkEllipse} alt="full black ellipse"/>
                <img className="woman-shopping" src={WomanShoppingBag} alt="beautiful black ladies"/>
            </div>
        </div>
    )
}

export default VendorExperience
