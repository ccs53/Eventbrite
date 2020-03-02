/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from 'emotion'
import React, {useState} from "react"
import QRCode from '../../assets/img/QRCode.png'
import Ticket from '../../assets/img/Target.svg'
import {motion} from 'framer-motion'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const styledCarousel = css`
{
    .carousel .slide{
        background: none;
        width: 100%
    }

    width: 90%
}
`
const Targets = () => {

    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>

    <div className="Target-container"> 

        <Carousel className={styledCarousel} showArrows={false} showIndicators={false} swipeable={true} showStatus={false} showThumbs={false}>
            <div>
                <div class="targetBg">
                    <div className="divQR">
                        <img className="QRImg" src={QRCode} alt="QRCode" />
                    </div>
                    <div>
                        <p>TICKET</p>
                    </div>
                    <div>
                        <p>ATENDEE</p>
                    </div>
                    <div>
                        <p>EMAIL</p>
                    </div>
                    <div>
                        <p>PHONE</p>
                    </div>
                </div>
            </div>
            <div>
                <img className="divTarg" src={Ticket} alt="DivTarget" />
            </div>
        </Carousel>
    </div>   
    </motion.div>
    
    
}

export default Targets