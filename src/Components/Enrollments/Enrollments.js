import React, { useEffect, useState } from 'react';
import AttemptYear from '../Onboarding/AttemptYear';
import Exam from '../Onboarding/Exam';
import axios from 'axios';
import { BACKEND_URLS } from '../Links/Config';
import { UserData } from '../Functions/Services';
import { useNavigate } from 'react-router-dom';

const Enrollments = () => {

    const name = JSON.parse(localStorage.getItem('userData')).user.full_name
    const [AttemptYearList, setAttemptYearList] = useState()
    const [ExamId, setExamId] = useState()

    const navigate = useNavigate()

    const access = localStorage.getItem('Access Key')

    useEffect(
        () =>{
            console.log("ExamId", access)
            if(ExamId) {

              axios.post(
                BACKEND_URLS.NEW_ENROLLMENTS,
                {
                    'target_course_id': ExamId,
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
        }

         },[ExamId]
    )


    return (
        // <div className='NewEnrollments'>
               <div className='Enrollments'>
        {/* // <div className='rightPortion '> */}


            {(!AttemptYearList) && <AttemptYear isName={name} setAttemptYearList={setAttemptYearList} />}
           
            {(AttemptYearList) && (!ExamId) && <Exam isName={name} targets={AttemptYearList} setExamId={setExamId} />}
           
        {/* // </div> */}
         </div>
    );
};

export default Enrollments;

