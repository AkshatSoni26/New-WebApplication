import React, { memo, useEffect } from 'react';
import Lottie from "lottie-react";
import '../../CSS/Register.css'
import animationData from '../lottie utils/esaral_loader.json'
import OverLayFunction from '../../Utility/OverLayFunction';
import { HomeOpenNav, OverlayOn } from '../Functions/Services';

// import 

const Scroller = () => {

    useEffect(
        () =>{
            OverlayOn()
        },[]
    )


    return (
        <>
        <div className='SpinnerCSS'>
            <Lottie animationData={animationData} style={{ position: "relative",zIndex: 2, backgroundColor:'none', width:"50%" }} />
            </div>
            <div id='overlay' />
        </>
    );
};

export default Scroller;

