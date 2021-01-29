import React from 'react'
import home1 from '../img/home1.png'
function AboutSection() {
    return (
        <div className = 'aboutus'>
            <div className="aboutus__title">
                <div className="aboutus__title__part">
                    <h2>We work to make</h2>
                </div>
                <div className="aboutus__title__part">
                    <h2>your <span>dreams</span></h2>
                </div>
                <div className="aboutus__title__part">
                    <h2>come true</h2>
                </div>
                <p  className = 'aboutus__description'>
                    Contact us for photography or videography ideas you have, we have professionals with amzing skills 
                </p>
                <button className="aboutus__btn">Contact us</button>
            </div>
            <div className="aboutus__image">
                <img src={home1} alt="aboutus__img"/>
            </div>
        </div>
    )
}

export default AboutSection
