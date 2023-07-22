import React from 'react';
import animationData from '../lottie utils/rocket-launch.json'
import LottieImgComp from './Components/LottieImgComp';
import '../../CSS/Register.css'



const CourseSettingup = () => {
    return (
        <>

            <div className='settingHeader'>
                Setting up your JEE journey!
            </div>

            <div className='settingheaderUnderline'>
                You can update your target whenever you wish to.
            </div>

            
            <div className='rocket_image'>
            <LottieImgComp animationData={animationData} />
            </div>
        </>
    );
};

export default CourseSettingup;