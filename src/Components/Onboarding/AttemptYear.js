import React, { useEffect, useState } from 'react';
import OnBordText from './Components/OnBordText';
import Imag from './Components/Imag';
import OptionChooseText from './Components/OptionChooseText';
import { ColorContainer } from '../../Functions/Services';
import animationData from '../lottie utils/pencil-animation.json'
import LottieImgComp from './Components/LottieImgComp';
import '../../CSS/Register.css'
import { BorderColors, Colors } from '../../Constants/Constants';
import axios from 'axios';
import { BACKEND_URLS, FRONTEND_URLS } from '../Links/Config';
import SpinnerFun from '../SpinnerFun/SpinnerFun';
import { useNavigate } from 'react-router-dom';
import Scroller from '../SpinnerFun/Scroller';




const AttemptYear = ({ isName, setAttemptYearList }) => {


    const [TargetData, setTargetData] = useState()
    const navigate = useNavigate()

    const [Buttons, setButtons] = useState()
    console.log('isName', isName)

    const str = 'Hi,' + ' ' + isName + ' ' + "👋"
    const access = localStorage.getItem("Access Key")


    useEffect(
        () => {
            const access = localStorage.getItem('Access Key')
            // if(access === null || access === undefined) {

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
                    console.log('under the error',err)
            if(access === null || access === undefined) {
            navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }
                }
            )
        // }
        // else{
        //     // localStorage.clear()
        //     navigate(FRONTEND_URLS.LOGIN_ROUTE)
        // }
        }, []
    )


    return (

        // (Buttons)
        //     ?
            <div className="mainPage AttemptYear">

                <OnBordText isName={str} startLine='Let’s customize your eSaral journey'/>
   

                <div className='PencilLottie'>
                    <LottieImgComp animationData={animationData} />
                </div>

                <div className='textonly'>
                <OptionChooseText mess='I am studying in class' />
                {/* </div> */}

                {/* <div className='colorBoxBig'> */}

                    <div className='AttemptButtons'>
                        {Buttons}
                    </div>
                </div>
            </div>
            // :
            // <Scroller />  
    );
};

export default AttemptYear;