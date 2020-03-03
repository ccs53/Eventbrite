/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from 'emotion'
import React, {useState} from "react"
import QRCode from '../../assets/img/QRCode.svg'
import Ticket from '../../assets/img/Target.svg'
import svgPts from '../../assets/img/iconPts.svg'
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

    .carousel .slide img.QRImg{
        width:65%;
    }
  
    width: 90%
}
`
const Targets = () => {

    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>

    <div className="Target-container"> 

        <Carousel className={styledCarousel} showArrows={true} showIndicators={false} swipeable={true} showStatus={false} showThumbs={false}>
            <div>
                <div class="targetBg">
                <img className="index" src={Ticket} alt="DivTarget" />
                    <div className="targetMenu">
                        <div className="pagMenu">
                            <p className="White">1/2</p>
                        </div>
                        <div className="tresPts">
                            <img className="svgPts" src={svgPts} alt="DivTarget" />
                        </div>
                    </div>
                    <div className="divQR">
                        <img className="QRImg" src={QRCode} alt="QRCode" />
                    </div>
                    <div className="tickNum">
                        <p>TICKET 0947465800</p>
                        <p>Early bird</p>
                    </div>
                    <div className="txtAlign">
                        <p>ATENDEE</p>
                        <p>Marty Ringlein</p>
                    </div>
                    <div className="mobileContainer txtAlign">
                        <div>
                            <p>EMAIL</p>
                            <div className="mail">
                                martyrin@maill.com
                            </div>      
                        </div>
                        <div>
                            <p>PHONE</p>
                            <p>+178998234</p>
                        </div>
                    </div>  
                    <div className="price">
                        $95.00
                    </div>     
                    <div>
                        <button type="button">RECIPT</button>
                    </div>             
                </div>
            </div>
            <div>
            <div class="targetBg">
                <img className="index" src={Ticket} alt="DivTarget" />
                    <div className="targetMenu">
                        <div className="pagMenu">
                            <p className="White">2/2</p>
                        </div>
                        <div className="tresPts">
                            <img className="svgPts" src={svgPts} alt="DivTarget" />
                        </div>
                    </div>
                    <div className="divQR">
                        <img className="QRImg" src={QRCode} alt="QRCode" />
                    </div>
                    <div className="tickNum">
                        <p>TICKET 0947465801</p>
                        <p>Early bird</p>
                    </div>
                    <div className="txtAlign">
                        <p>ATENDEE</p>
                        <p>Marty Ringlein</p>
                    </div>
                    <div className="mobileContainer txtAlign">
                        <div>
                            <p>EMAIL</p>
                            <div className="mail">
                                martyrin@maill.com
                            </div>      
                        </div>
                        <div>
                            <p>PHONE</p>
                            <p>+178998234</p>
                        </div>
                    </div>  
                    <div className="price">
                        $87.00
                    </div>     
                    <div>
                        <button type="button">RECIPT</button>
                    </div>             
                </div>
            </div>
        </Carousel>
    </div>   
    </motion.div>
    
    
}

export default Targets