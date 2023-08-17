import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import OnBordText from './Components/OnBordText';
import OptionChooseText from './Components/OptionChooseText';
import { ColorContainer } from '../../Functions/Services';
import animationData from '../../utils/lottie utils/pencil-animation.json'
import { BACKEND_URLS, FRONTEND_URLS } from '../../Components/Links/Config';
import LottieImgComp from './Components/LottieImgComp';

import '../../assets/CSS/Register.css'



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
        }, []
    )


    return (
            <div className="mainPage AttemptYear">

                <OnBordText isName={str} startLine='Let’s customize your eSaral journey'/>
   
                <div className='PencilLottie'>
                    <LottieImgComp animationData={animationData} />
                </div>

                <div className='textonly'>
                <OptionChooseText mess='I am studying in class' />

                    <div className='AttemptButtons'>
                        {Buttons}
                    </div>
                </div>
            </div>
    );
};

export default AttemptYear;