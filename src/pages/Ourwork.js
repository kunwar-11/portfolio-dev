import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

import {motion} from 'framer-motion'
import {pageAnimation , fade ,imageAnimation , lineAnimation , slider , sliderContainer} from '../animation'

function Ourwork() {
    return (
        <Work style = {{backgroundColor : '#fff'}} exit='exit' variants = {pageAnimation} initial = 'hidden' animate = 'show'>
            <motion.div variants = {sliderContainer}>
                <Frame1 variants = {slider} />
                <Frame2 variants = {slider} />
                <Frame3 variants = {slider} />
                <Frame4 variants = {slider} />
            </motion.div>
            <Movie>
                <motion.h2 variants = {fade}>The Athelete</motion.h2>
                <motion.div variants = {lineAnimation} className="line"></motion.div>
                <Link to = '/work/the-athlete'>
                    <Hide>
                        <motion.img variants = {imageAnimation} src={athlete} alt="athlete"/>   
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h2 variants = {fade}>The Racer</motion.h2>
                <motion.div variants = {lineAnimation} className="line"></motion.div>
                <Link to = '/work/the-racer'>
                    <Hide>
                        <motion.img variants = {imageAnimation} src={theracer} alt="theracer"/>
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h2 variants = {fade}>Good Times</motion.h2>
                <motion.div variants = {lineAnimation} className="line"></motion.div>
                <Link to = '/work/good-times'>
                    <Hide>
                        <motion.img variants = {imageAnimation} src={goodtimes} alt="goodtimes"/>
                    </Hide>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height : 100vh;
    overflow : hidden;
    padding : 5rem 10rem;
    h2 {
        padding : 1rem 0rem;
    }
`
const Movie = styled.div`
    padding-bottom : 10rem;
    .line {
        height : 0.5rem;
        background-color : #23d997;
        margin-bottom : 3rem;
    }
    img{
        width : 100%;
        height : 80vh;
        object-fit : cover;
    }
`

const Hide = styled.div`
    overflow : hidden;
`

const Frame1 = styled(motion.div)`
    position : fixed;
    left : 0;
    top : 10%;
    background-color : #fffebf;
    width : 100%;
    height : 100vh;
    z-index : 2;
`

const Frame2 = styled(Frame1)`
    background-color : #ff8efb;
`
const Frame3 = styled(Frame1)`
    background-color : #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background-color : #8effa0;
`
export default Ourwork
