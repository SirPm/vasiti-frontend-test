import React from 'react'
import { Link } from 'react-router-dom'

import './subheader.css'

const SubHeader = () => {
    return (
        <div className="sub-header-div general-width">
            <ul id="subHeaderNav">
                <li><Link className="sub-header-nav-link" to="/">MARKETPLACE</Link></li>
                <li><Link className="sub-header-nav-link" to="/">WHOLESALE CENTER</Link></li>
                <li><Link className="sub-header-nav-link" to="/">SELLER CENTER</Link></li>
                <li><Link className="sub-header-nav-link" to="/">SERVICES</Link></li>
                <li><Link className="sub-header-nav-link" to="/">INTERNSHIPS</Link></li>
                <li><Link className="sub-header-nav-link" to="/">EVENTS</Link></li>
            </ul>
        </div>
    )
}

export default SubHeader
