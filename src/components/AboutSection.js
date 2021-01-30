import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components'
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
const Aboutus = styled.div`
    min-height : 90vh;
    display: flex;
    align-items : center;
    justify-content : space-between;
    padding : 5rem 10rem;
    color : white;
`

const AboutusTitle = styled.div`
    flex : 1;
    padding-right : 5rem;
    h2 {
        font-weight : lighter;
    }
`

const AboutusImage = styled.div`
    flex : 1;
    overflow : hidden;
    img {
        width : 100%;
        height : 80vh;
        object-fit : cover;
    }
`

const AboutusTitlePart = styled.div`
    overflow : hidden;
`
export default AboutSection
