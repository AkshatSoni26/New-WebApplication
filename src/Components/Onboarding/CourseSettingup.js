import React, { useEffect } from 'react';
import animationData from '../lottie utils/rocket-launch.json'
import LottieImgComp from './Components/LottieImgComp';
import '../../CSS/Register.css'
import axios from 'axios';
import { BACKEND_URLS } from '../Links/Config';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../../Functions/Services';



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