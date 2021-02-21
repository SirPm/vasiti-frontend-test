import React from 'react'

import './header.css'
import Logo from '../../assets/vasiti-logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header general-width">
            <div id="logo">
                <img src={Logo} alt="vasiti logo"/>
            </div>
            <div id="headerNav">
                <ul id="headerNavLeft">
                    <li><Link className="header-nav-link" to="/">ABOUT US</Link></li>
                    <li><Link className="header-nav-link" to="/">STORIES</Link></li>
                    <li><Link className="header-nav-link" to="/">CONTACT</Link></li>
                </ul>
                <ul id="headerNavRight">
                    <li><Link className="header-nav-link" to="/">LOG IN</Link></li>
                    <li id="signUpBtnLi"><Link className="header-nav-link sign-up-btn" to="/">SIGN UP</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
