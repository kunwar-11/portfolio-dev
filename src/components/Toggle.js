import React , {useState} from 'react'
import {motion} from 'framer-motion'
function Toggle({children , title}) {
    const [toggle , setToggle] = useState(false)
    return (
        <motion.div layout className = 'faqSection__question' onClick = {() => setToggle(!toggle)}>
            <motion.h4 layout>{title}</motion.h4>
            {
                toggle ? children : ''
            }
            <div className="faq__line"></div>
        </motion.div>
    )
}

export default Toggle
