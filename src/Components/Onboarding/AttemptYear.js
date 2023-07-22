import React from 'react';
import OnBordText from './Components/OnBordText';
import Imag from './Components/Imag';
import OptionChooseText from './Components/OptionChooseText';
import { ColorContainer } from '../Functions/Services';
import animationData from '../lottie utils/pencil-animation.json'
import LottieImgComp from './Components/LottieImgComp';
import '../../CSS/Register.css'




const AttemptYear = ({ isName }) => {

    const CLASSES = ['8th', '9th', '10th', '11th', '12th', '12th pass']
    const Colors = ['#FFF3DC', '#E5F8FF', '#ECE9FF', '#FFEAF4', '#FFE8DC', '#E1F9E3']
    const BorderColors = ['#FFB023', '#3090E8', '#5F46E3', '#C91E5C', '#D65E25', '#008444']

    const classElements  = ColorContainer( CLASSES, Colors, BorderColors)

    const str = 'Hi,'+' '+isName+' '+"👋"


return (
    <div className='OnborMainPage'>

        <OnBordText isName={str} />

        <div className='PencilLottie'>

        <LottieImgComp animationData={animationData} />
        </div>


        {/* <Imag  imag={pensil}/> */}

        <OptionChooseText mess='I am studying in class' />

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

export default AttemptYear;