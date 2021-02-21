import React from 'react'
import { useHistory } from 'react-router-dom';

import './user-testimonial.css'

const UserTestimonial = ({ testimonial, setTestimonial}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTestimonial({
            ...testimonial,
            [name]: value
        })
    }
    
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/success');
    }
    
    return (
        <div className="user-testimonial general-width">
            <h1>Share your amazing story!</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-div">
                    <label htmlFor="picture">Upload Your File</label>
                    <input required onChange={handleChange} name="image" value={testimonial.image} type="file" id="picture" />
                </div>
                <div className="first-last-name">
                    <div className="input-div">
                        <label htmlFor="firstName">First Name</label>
                        <input required onChange={handleChange} type="text" name="firstName" value={testimonial.firstName} id="firstName" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="lastName">Last Name</label>
                        <input required onChange={handleChange} type="text" name="lastName" value={testimonial.lastName} id="lastName" />
                    </div>
                </div>
                <div className="input-div">
                    <label htmlFor="story">Share Your Story</label>
                    <textarea name="story" onChange={handleChange} value={testimonial.story} id="story" />
                </div>
                <div className="input-div radio">
                    <label htmlFor="radio">What did you interact with Vasiti as?</label>
                    <div id="radio-div">
                        <div className="radio-div-inner"><input required onChange={handleChange} type="radio" name="status" value="Customer"/> Customer</div>
                        <div className="radio-div-inner"><input required onChange={handleChange} type="radio" name="status" value="Vendor"/> Vendor</div>
                    </div>
                </div>
                <div className="input-div">
                    <label htmlFor="city">City or Higher Institution (for Students)</label>
                    <input required onChange={handleChange} name="city" value={testimonial.city} type="text" id="city" />
                </div>
                <button id="share">Share Your Story</button>
            </form>
        </div>
    )
}

export default UserTestimonial
