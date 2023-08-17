import React, { memo } from 'react';
import Lottie from "lottie-react";
import '../../../CSS/Register.css'


const LottieImgComp = ({ animationData }) => {

    return (
        <div className='lottoImage'>
            <Lottie animationData={animationData} loop={false} />
        </div>
    );
};

export default memo(LottieImgComp);