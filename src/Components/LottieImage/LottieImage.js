import React, { memo } from 'react';

import Lottie from "lottie-react";

import animationData from '../lottie utils/playing image.json'
import '../../CSS/App.css'



const LottieImage = () => {
    return (
        <div className='accordianImage2'>
            <Lottie style={{height: 30, width: 30}} animationData={animationData} loop={true} />
        </div>

        );
    };
    
    export default memo(LottieImage);

    
//     // <>
//     // <div className='accordianImage2'>

//         {/* <div className='LottieBackgroundColour'>

//             <div className='playbuttondiv'>
//                 <div className='playbutton lottie'> */}
//         {/* <div style={{
// height: "50%", 
// marginTop: "10%"
// }}> */}
// {/* 
//         <div className='Trail'>
//             <Lottie animationData={animationData} loop={true} />
//         </div>   */}

//         {/* </div>
//             </div>

//         </div> */}

//     // </div >
//     // {/* </> */ }