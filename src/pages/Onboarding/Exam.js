import React, { useEffect, useState } from 'react';

import OnBordText from './Components/OnBordText';
import OptionChooseText from './Components/OptionChooseText';
import { ColorContainerNew } from '../../Functions/Services';
import animationData from '../../utils/lottie utils/target.json'
import LottieImgComp from './Components/LottieImgComp';
import SpinnerFun from '../../Components/SpinnerFun/SpinnerFun';
// import '../../CSS/Register.css'
// import SpinnerFun from '../SpinnerFun/SpinnerFun';




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
            <div className='mainPage AttemptYear Exam'>

                <OnBordText isName={str} startLine='Let’s customize your eSaral journey' />

                <div className='PencilLottie'>
                    <LottieImgComp animationData={animationData} />
                </div>

                <div className='textonly'>
                <OptionChooseText mess='I am preparing for' />

                {/* <div className='colorBoxBig'> */}
                    <div className='AttemptButtons ExamBut'>
                        {Buttons}
                    </div>
                </div>
            </div>
            :
            <SpinnerFun />
    );
};

export default Exam;