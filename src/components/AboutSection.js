import React from 'react'
import home1 from '../img/home1.png'
// import styled from 'styled-components'
import {Aboutus , AboutusTitle , AboutusTitlePart , AboutusImage} from '../styles'
function AboutSection() {
    return (
        <Aboutus>
            <AboutusTitle>
                <AboutusTitlePart>
                    <h2>We work to make</h2>
                </AboutusTitlePart>
                <AboutusTitlePart>
                    <h2>your <span>dreams</span></h2>
                </AboutusTitlePart>
                <AboutusTitlePart>
                    <h2>come true</h2>
                </AboutusTitlePart>
                <p  className = 'aboutus__description'>
                    Contact us for photography or videography ideas you have, we have professionals with amzing skills 
                </p>
                <button className="aboutus__btn">Contact us</button>
            </AboutusTitle>
            <AboutusImage>
                <img src={home1} alt="aboutus__img"/>
            </AboutusImage>
        </Aboutus>
    )
}

export default AboutSection
