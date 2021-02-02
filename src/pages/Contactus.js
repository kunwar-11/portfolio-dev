import React from 'react'
import {motion} from 'framer-motion'
import {pageAnimation , titleAnimation} from '../animation'
import styled from 'styled-components'
function Contactus() {
    return (
        <Contact exit='exit' variants = {pageAnimation} initial = 'hidden' animate = 'show' style = {{backgroundColor : '#fff'}}>
            <Title>
                <Hide>
                    <motion.h2 variants = {titleAnimation}>Get In Touch</motion.h2>
                </Hide>
            </Title>
            <Hide>
            <Links variants = {titleAnimation}>
                <Circle />
                <h2>Send A message</h2>
            </Links>
            </Hide>
            <Hide>
            <Links variants = {titleAnimation}>
                <Circle />
                <h2>Contact via E mail</h2>
            </Links>
            </Hide>
            <Hide>
            <Links variants = {titleAnimation}>
                <Circle />
                <h2>Social media</h2>
            </Links>
            </Hide>
        </Contact>
    )
}
const Contact = styled(motion.div)`
    padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`
const Title = styled.div`
    margin-bottom : 4rem;
    color : black;
    @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`
const Hide = styled.div`
    overflow : hidden;
`
const Links = styled(motion.div)`
    display : flex;
    align-items : center;
    h2 {
        margin : 2rem
    }
`
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
export default Contactus
