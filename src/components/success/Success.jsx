import React from 'react'
import { useHistory } from 'react-router-dom'

import './success.css'

const Success = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div className="success">
            <div className="success-inner">
                <span id="successImage">🎉</span>
                <span id="thankYou">Thank You For Sharing Your Story</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button onClick={handleClick} id="close">Close</button>
            </div>
        </div>
    )
}

export default Success
