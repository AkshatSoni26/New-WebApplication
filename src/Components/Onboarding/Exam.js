import React from 'react';
import OnBordText from './Components/OnBordText';
import OptionChooseText from './Components/OptionChooseText';
import Imag from './Components/Imag';
import { ColorContainer } from '../Functions/Services';
import animationData from '../lottie utils/target.json'
import LottieImgComp from './Components/LottieImgComp';
import '../../CSS/Register.css'




const Exam = ({ isName }) => {


    const CLASSES = ['JEE', 'NEET', 'Class 10th', 'Class 9th']
    const Colors = ['#FFF1D7', '#E0F6FF', '#ECE9FF', '#FFEAF4']
    const BorderColors = ['#FFB023', '#3090E8', '#5F46E3', '#C91E5C']

    const classElements = ColorContainer(CLASSES, Colors, BorderColors)

    const str = 'Hi,' + ' ' + isName + ' ' + "👋"

    return (
        <div className='OnborMainPage'>
            <OnBordText isName={str} />

            <div className='targetLottie'>
                <LottieImgComp animationData={animationData} />
            </div>



            {/* <Imag imag={target} /> */}

            <OptionChooseText mess='I am preparing for' />

            <div className='colorBoxBig'>

                <div className='container' >
                    <div className='row' >

                        {classElements}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Exam;