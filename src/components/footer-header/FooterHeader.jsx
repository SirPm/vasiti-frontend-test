import React from 'react'

import './footer-header.css'
import SubscribeBannerFooter from '../../assets/subscribe-banner-footer.svg'

const FooterHeader = () => {
    return (
        <div className="footer-header general-width">
            <div className="footer-header-image">
                <img src={SubscribeBannerFooter} alt="subscribe banner footer"/>
            </div>
            <div className="footer-header-text">
                <h2>Be a member of our community 🎉</h2>
                <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                <div className="email-div">
                    <input placeholder="enter your email address" type="email"/>
                    <input type="button" id="subscribeBtn" value="SUBSCRIBE"/>
                </div>
            </div>
        </div>
    )
}

export default FooterHeader
