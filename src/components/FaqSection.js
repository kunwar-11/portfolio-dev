import React from 'react'
import {Aboutus} from '../styles'
import styled from 'styled-components'
function FaqSection() {
    return (
        <Faq>
            <div className="faqSection__header">
                <h2>Any Question ? <span>FAQ </span></h2>
                <div className="faqSection__question">
                    <h4>How Do I start ?</h4>
                    <div className="faqSection__question__answer">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis reprehenderit praesentium laboriosam iusto minima, consequuntur</p>
                    </div>
                    <div className="faq__line"></div>
                </div>
                <div className="faqSection__question">
                    <h4>What Products do you offer ?</h4>
                    <div className="faqSection__question__answer">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis reprehenderit praesentium laboriosam iusto minima, consequuntur</p>
                    </div>
                    <div className="faq__line"></div>
                </div>
                <div className="faqSection__question">
                    <h4>Different payement methods</h4>
                    <div className="faqSection__question__answer">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis reprehenderit praesentium laboriosam iusto minima, consequuntur</p>
                    </div>
                    <div className="faq__line"></div>
                </div>
                <div className="faqSection__question">
                    <h4>Daily Schedule</h4>
                    <div className="faqSection__question__answer">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis reprehenderit praesentium laboriosam iusto minima, consequuntur</p>
                    </div>
                    <div className="faq__line"></div>
                </div>
            </div>
        </Faq>
    )
}
const Faq = styled(Aboutus)`
 display : block;
 span {
     display : block;
 }
 h2 {
     padding-bottom : 2rem;
     font-weight : lighter;
 }
 .faq__line {
    background : #cccccc;
    height : 0.2rem;
    width : 100%;
    margin : 2rem 0rem;
 }
 .faqSection__question{
    padding: 3rem 0rem;
    cursor : pointer;
 }
 .faqSection__answer{
    padding : 2rem 0rem;
    p {
        padding : 1rem 0rem;
    }
 }
`
export default FaqSection
