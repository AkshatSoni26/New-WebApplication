import React, { useEffect } from 'react';
import animationData from '../lottie utils/rocket-launch.json'
import LottieImgComp from './Components/LottieImgComp';
import '../../CSS/Register.css'
import axios from 'axios';
import { BACKEND_URLS } from '../Links/Config';
import { PiCrownSimple } from 'react-icons/pi';



const   CourseSettingup = ({id}) => {
    console.log('CourseSettingup')

    const access = localStorage.getItem("Access Key")

    useEffect(
        () =>{
           axios.post(
            BACKEND_URLS.NEW_ENROLLMENTS,
            {
                body: {
                    'target_course_id': id,
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + access
                }
            },
           ).then(
            (resp) => { 
                console.log('CourseSettingup resp', resp)
            }
           ).catch(
            (err) => { 
                console.log("CourseSettingup err",err)
            }
           )
        },[]
    )
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