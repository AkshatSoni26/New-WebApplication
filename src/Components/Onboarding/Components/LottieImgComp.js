import React, { memo } from 'react';
import Lottie from "lottie-react";
import '../../../CSS/Register.css'


const LottieImgComp = ({ animationData }) => {

    return (
        <>
            <Lottie animationData={animationData} loop={true} />
        </>
    );
};

export default memo(LottieImgComp);