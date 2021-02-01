import React from 'react'
import home1 from '../img/home1.png'
// import styled from 'styled-components'
import {Aboutus , AboutusTitle , AboutusTitlePart , AboutusImage} from '../styles'
import {motion} from 'framer-motion'
import {titleAnimation , fade , imageAnimation} from '../animation'
import Wave from './Waves'
function AboutSection() {
    return (
        <Aboutus>
            <AboutusTitle>
                <AboutusTitlePart>
                    <motion.h2 variants = {titleAnimation}>We work to make</motion.h2>
                </AboutusTitlePart>
                <AboutusTitlePart>
                    <motion.h2 variants = {titleAnimation}>your <span>dreams</span></motion.h2>
                </AboutusTitlePart>
                <AboutusTitlePart>
                    <motion.h2 variants = {titleAnimation}>come true</motion.h2>
                </AboutusTitlePart>
                <motion.p variants = {fade}  className = 'aboutus__description'>
                    Contact us for photography or videography ideas you have, we have professionals with amzing skills 
                </motion.p>
                <motion.button variants = {fade} className="aboutus__btn">Contact us</motion.button>
            </AboutusTitle>
            <AboutusImage>
                <motion.img variants = {imageAnimation} src={home1} alt="aboutus__img"/>
            </AboutusImage>
            <Wave />
        </Aboutus>
    )
}

export default AboutSection
