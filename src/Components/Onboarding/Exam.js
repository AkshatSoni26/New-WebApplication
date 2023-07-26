import React, { useEffect, useState } from 'react';
import OnBordText from './Components/OnBordText';
import OptionChooseText from './Components/OptionChooseText';
import Imag from './Components/Imag';
import { ColorContainerNew } from '../Functions/Services';
import animationData from '../lottie utils/target.json'
import LottieImgComp from './Components/LottieImgComp';
import '../../CSS/Register.css'
import { BorderColors, Colors } from '../../Constants/Constants';
import SpinnerFun from '../SpinnerFun/SpinnerFun';




const Exam = ({ isName, targets, setExamId }) => {

    const [Buttons, setButtons] = useState()

    useEffect(
        () => {
            setButtons(ColorContainerNew(targets, setExamId))
        }, []
    )

    const str = 'Hi,' + ' ' + isName + ' ' + "👋"

    return (

        Buttons
            ?
            <div className='OnborMainPage'>
                <OnBordText isName={str} />

                <div className='targetLottie'>
                    <LottieImgComp animationData={animationData} />
                </div>


                <OptionChooseText mess='I am preparing for' />

                <div className='colorBoxBig'>

                    {/* <div className='container' >
                    <div className='row' > */}
                    <div className='buttonClass'>

                        {Buttons}

                    </div>


                    {/* </div>
                </div> */}
                </div>

            </div>
            :
            <SpinnerFun />
    );
};

export default Exam;