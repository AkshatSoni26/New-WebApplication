import React, { memo, useEffect } from 'react';
import Lottie from "lottie-react";
import '../../assets/CSS/Register.css'
import animationData from '../../utils/lottie utils/esaral_loader.json'
import OverLayFunction from '../../GlobalComponents/OverLayFunction';
import { OverlayOn, HomeOpenNav } from '../../Functions/Services';
// import { HomeOpenNav, OverlayOn } from '../../Functions/Services';



const Scroller = () => {

    useEffect(
        () => {
            OverlayOn()
        }, []
    )


    return (
        <>
            <div className='SpinnerCSS'>
                <Lottie animationData={animationData} style={{ position: "relative", zIndex: 2, backgroundColor: 'none', width: "50%" }} />
            </div>
            <div id='overlay' />
        </>
    );
};

export default Scroller;


