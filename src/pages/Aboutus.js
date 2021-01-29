import React from 'react'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import Faq from '../components/FaqSection'
function Aboutus() {
    return (
        <div className = 'aboutUs__page'>
            <AboutSection />
            <ServicesSection />
            <Faq />
        </div>
    )
}

export default Aboutus
