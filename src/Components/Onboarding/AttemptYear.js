import React, { useEffect, useState } from 'react';
import OnBordText from './Components/OnBordText';
import Imag from './Components/Imag';
import OptionChooseText from './Components/OptionChooseText';
import { ColorContainer } from '../Functions/Services';
import animationData from '../lottie utils/pencil-animation.json'
import LottieImgComp from './Components/LottieImgComp';
import '../../CSS/Register.css'
import { BorderColors, Colors } from '../../Constants/Constants';
import axios from 'axios';
import { BACKEND_URLS } from '../Links/Config';




const AttemptYear = ({ isName, setAttemptYearList }) => {


    const [TargetData, setTargetData] = useState()

    const [Buttons, setButtons] = useState()

    const str = 'Hi,' + ' ' + isName + ' ' + "👋"
    const access = localStorage.getItem("Access Key")


    useEffect(
        () => {
            axios.get(
                BACKEND_URLS.GET_ALL_TARGETS,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + access
                    }
                }
            ).then(
                (resp) => {
                    console.log('resp', resp)
                    console.log("resp.data.classes", resp.data.data.classes)

                    const target = resp.data.data.classes


                    setTargetData(resp.data.data.classes)

                    setButtons(ColorContainer(isName, target, setAttemptYearList))
                }
            ).catch(
                (err) => {
                    console.log(err)
                }
            )
        }, []
    )


    return (

        (Buttons)
            ?
            <div className='OnborMainPage'>

                <OnBordText isName={str} />

                <div className='PencilLottie'>

                    <LottieImgComp animationData={animationData} />
                </div>

                <OptionChooseText mess='I am studying in class' />

                <div className='colorBoxBig'>

                    {/* <div className='container' >
                <div className='row' > */}
                    <div className='buttonClass'>
                        {/* {
                            Buttons.map(
                                (button, index) => {
                                    return button
                                }
                            )
                        } */}
                        {Buttons}
                    </div>
                </div>
            </div>
            // </div>

            // </div>
            :
            <>Loading...</>
    );
};

export default AttemptYear;