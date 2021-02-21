import React from 'react'

import { Link } from 'react-router-dom'

import fb from '../../assets/fb.svg'
import ig from '../../assets/ig.svg'
import tw from '../../assets/tw.svg'
import linkedin from '../../assets/in.svg'
import './footer-body.css'

const FooterBody = () => {
    return (
        <div className="footer-body general-width">
            <div className="footer-link-1">
                <ul className="footer-link-ul">
                    <li className="footer-link-heading">Company</li>
                    <li className="first-link"><Link className="footer-link"  to='/'>About Us</Link></li>
                    <li><Link className="footer-link" to='/'>Terms of Use</Link></li>
                    <li><Link className="footer-link" to='/'>Privacy Policy</Link></li>
                    <li><Link className="footer-link" to='/'>Press & Media</Link></li>
                </ul>
                <ul className="footer-link-ul">
                    <li className="footer-link-heading">Products</li>
                    <li className="first-link"><Link className="footer-link"  to='/'>Marketplace</Link></li>
                    <li><Link className="footer-link" to='/'>Magazine</Link></li>
                    <li><Link className="footer-link" to='/'>Seller</Link></li>
                    <li><Link className="footer-link" to='/'>Wholesale</Link></li>
                    <li><Link className="footer-link" to='/'>Services</Link></li>
                </ul>
            </div>
            <div className="footer-link-2">
                <ul className="footer-link-ul careers">
                    <li className="careers-heading">Careers</li>
                    <li className="first-link"><Link className="careers-link"  to='/'>Become a Campus Rep</Link></li>
                    <li><Link className="careers-link" to='/'>Become a Vasiti Influencer</Link></li>
                    <li><Link className="careers-link" to='/'>Become a Campus writer</Link></li>
                    <li><Link className="careers-link" to='/'>Become an Affiliate</Link></li>
                </ul>
                <ul className="footer-link-ul inTouch">
                    <li className="footer-link-heading" id="getInTouch">Get In Touch</li>
                    <li className="first-link"><Link className="footer-link"  to='/'>Contact Us</Link></li>
                    <li><Link className="footer-link" to='/'>Partner With Us</Link></li>
                    <li><Link className="footer-link" to='/'>Advertise With Us</Link></li>
                    <li><Link className="footer-link" to='/'>Help/FAQs</Link></li>
                </ul>
            </div>
            <div className="footer-link-3">
                <span className="footer-link-heading">Join Our Community</span>
                <div className="social-icons first-link">
                    <img src={fb} alt="facebook logo"/>
                    <img src={ig} alt="instagram logo"/>
                    <img src={tw} alt="twitter logo"/>
                    <img src={linkedin} alt="linkedin logo"/>
                </div>
                <span className="newsletter">Email Newsletter</span>
            </div>
        </div>
    )
}

export default FooterBody
