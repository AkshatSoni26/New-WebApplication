import React, { memo } from 'react';

import Lottie from "lottie-react";

import animationData from '../lottie utils/playing image.json';

import '../../CSS/App.css'

const LottieImage = () => {


    return (
        <>
            <div className='accordianImage2'></div>

            <div className='LottieBackgroundColour'>

                <div className='playbuttondiv'>
                    <div className='playbutton lottie'>
                        <Lottie animationData={animationData} loop={true} />
                    </div>
                </div>

            </div>
        </>
    );
};

export default memo(LottieImage);