import React, {useState} from "react"
import BudLightLogo from '../../assets/img/LogoBudLight.svg'
import EventLogo from '../../assets/img/logo-orange-circle.png'
import {motion, useAnimation} from 'framer-motion'

const Logo = () => {

    const headerVariants = {
        inicio: {height: 'max-content', transition: {duration: 3, type: "tween", delay: 1}},
    }
    const headerControls = useAnimation()
    headerControls.start(headerVariants.inicio)

    const logoVariants = {
        animation: {scale:1, x: 0, transition: {duration: 3, type: "tween", delay: 1}}
    }

    const logoControls = useAnimation()
    logoControls.start(logoVariants.animation)

    return <motion.div  initial={{height: '100%'}} animate={headerControls} className="header"> 
                <img className="eLogo" src={EventLogo} alt="LogoEvenbrite" />
            <motion.div initial={{scale: 5, x: '150%'}} animate={logoControls}>
                <img className="budLightLogo" src={BudLightLogo} alt="BudLightLogo" />
            </motion.div>
                
        </motion.div>
}

export default Logo