import React from 'react'
import {Aboutus} from '../styles'
import styled from 'styled-components'
import Toggle from './Toggle'
import {AnimateSharedLayout} from 'framer-motion'
import {scrollAnimation} from '../animation'
import {useScroll} from './useScroll'
function FaqSection() {
    const [elements , controls] = useScroll()
    return (
        <Faq variants = {scrollAnimation} ref = {elements} animate = {controls} initial = 'hidden' >
            <div className="faqSection__header">
                <h2>Any Question ? <span>FAQ </span></h2>
                <AnimateSharedLayout>
                <Toggle title = 'How Do I start ?'>     
                        <div className="faqSection__question__answer">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis reprehenderit praesentium laboriosam iusto minima, consequuntur</p>
                        </div>
                </Toggle>
                <Toggle title = 'What Products do you offer ?'>
                    <div className="faqSection__question__answer">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis reprehenderit praesentium laboriosam iusto minima, consequuntur</p>
                    </div>
                </Toggle>
                <Toggle title = 'Different payement methods'>
                    <div className="faqSection__question__answer">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis reprehenderit praesentium laboriosam iusto minima, consequuntur</p>
                    </div>
                </Toggle>
                <Toggle title = 'Daily Schedule'>
                     <div className="faqSection__question__answer">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis reprehenderit praesentium laboriosam iusto minima, consequuntur</p>
                    </div>
                </Toggle>
                </AnimateSharedLayout>
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
