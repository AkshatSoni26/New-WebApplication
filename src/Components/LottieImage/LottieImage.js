import React, { memo } from 'react';
import Lottie from "lottie-react";

import animationData from '../../utils/lottie utils/playing image.json'
import '../../assets/CSS/App.css'



const LottieImage = () => {
    return (
        <div className='accordianImage2'>
            <Lottie style={{height: 30, width: 30}} animationData={animationData} loop={true} />
        </div>

        );
    };
    
export default memo(LottieImage);