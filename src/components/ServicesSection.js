import React from 'react'
import Clock from '../img/clock.svg'
import Diaphragm from '../img/diaphragm.svg'
import Money from '../img/money.svg'
import Teamwork from '../img/teamwork.svg'
import Home2 from '../img/home2.png'
import {Aboutus , AboutusTitle , AboutusImage} from '../styles'
import styled from 'styled-components'
import {scrollAnimation} from '../animation'
import {useScroll} from './useScroll'
function ServicesSection() {
    const [elements,controls] = useScroll()
    return (
        <Services variants = {scrollAnimation} ref = {elements} animate = {controls} initial = 'hidden'>
            <AboutusTitle>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="service__card__header">
                            <img src= {Clock} alt = 'card-img'/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </Card>
                    <Card>
                        <div className="service__card__header">
                            <img src= {Teamwork} alt = 'card-img'/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </Card>
                    <Card>
                        <div className="service__card__header">
                            <img src= {Diaphragm} alt = 'card-img'/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </Card>
                    <Card>
                        <div className="service__card__header">
                            <img src= {Money} alt = 'card-img'/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </Card>
                </Cards>
            </AboutusTitle> 
                <AboutusImage>
                    <img src={Home2} alt="home-img-2"/>
                </AboutusImage>
        </Services>
    )
}

const Services = styled(Aboutus)`
    padding : 5rem 4.5rem;
    h2 {
        padding-bottom : 5rem;
    }
    p {
        padding : 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div`
    display : flex;
    flex-wrap : wrap;
`

const Card = styled.div`
    flex-basis : 20rem;
    .service__card__header{
        display : flex;
        align-items : center;
        h3 {
            margin-left : 1rem;
            padding : 1rem;
            background-color : white;
            color : black;
        }
    }
`
export default ServicesSection
