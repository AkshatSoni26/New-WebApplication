import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import animationData from '../../utils/lottie utils/rocket-launch.json'
import { UserData } from '../../Functions/Services';
import LottieImgComp from './Components/LottieImgComp';
import { BACKEND_URLS } from '../../Components/Links/Config';

import '../../assets/CSS/Register.css'



const   CourseSettingup = ({id}) => {
    console.log('CourseSettingup', id)
    const navigate = useNavigate()

    const access = localStorage.getItem("Access Key")

    useEffect(
        () =>{
            axios.post(
                BACKEND_URLS.NEW_ENROLLMENTS,
                {
                    'target_course_id': id,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + access
                    }
                },
            ).then(
                (resp) => { 
                    console.log('CourseSettingup resp', resp);
                    localStorage.removeItem('reg')
                    UserData(access, navigate)
                }
            ).catch(
                (err) => { 
                    console.log("CourseSettingup err", err);
                }
            );
            

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
                <div className='rocket_image2'>

            <LottieImgComp animationData={animationData} />
                </div>
            </div>
        </>
    );
};

export default CourseSettingup;