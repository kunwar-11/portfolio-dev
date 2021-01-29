import React from 'react'
import Clock from '../img/clock.svg'
import Diaphragm from '../img/diaphragm.svg'
import Money from '../img/money.svg'
import Teamwork from '../img/teamwork.svg'
import Home2 from '../img/home2.png'
function ServicesSection() {
    return (
        <div className='services'>
            <div className="services__description">
                <h2>High <span>quality</span> services</h2>
                <div className="services__cards">
                    <div className="services__card">
                        <div className="service__card__header">
                            <img src= {Clock} alt = 'card-img'/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="services__card">
                        <div className="service__card__header">
                            <img src= {Teamwork} alt = 'card-img'/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="services__card">
                        <div className="service__card__header">
                            <img src= {Diaphragm} alt = 'card-img'/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="services__card">
                        <div className="service__card__header">
                            <img src= {Money} alt = 'card-img'/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className="services__image">
                    <img src={Home2} alt="home-img-2"/>
                </div>
            </div>

        </div>
    )
}

export default ServicesSection
