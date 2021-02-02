import React from 'react'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import Faq from '../components/FaqSection'

import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import ScrollTop  from '../components/ScrollTop'
function Aboutus() {
    return (
        <motion.div exit='exit' variants = {pageAnimation} initial = 'hidden' animate = 'show' className = 'aboutUs__page'>
            <AboutSection />
            <ServicesSection />
            <Faq />
            <ScrollTop />
        </motion.div>
    )
}

export default Aboutus
