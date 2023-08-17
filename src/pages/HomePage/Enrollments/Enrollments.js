import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../../../Functions/Services';
import { BACKEND_URLS } from '../../../Components/Links/Config';
import AttemptYear from '../../Onboarding/AttemptYear';
import Exam from '../../Onboarding/Exam';

const Enrollments = () => {

    const name = JSON.parse(localStorage.getItem('userData')).user.full_name
    const [AttemptYearList, setAttemptYearList] = useState()
    const [ExamId, setExamId] = useState()

    const navigate = useNavigate()

    const access = localStorage.getItem('Access Key')

    useEffect(
        () => {
            console.log("ExamId", access)
            if (ExamId) {

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

        }, [ExamId]
    )


    return (
            <div className='rightPortion scrollingOnBording plusBut'>
                <div className='ViewPortProblem'>
                    {(!AttemptYearList) && <AttemptYear isName={name} setAttemptYearList={setAttemptYearList} />}
                    {(AttemptYearList) && (!ExamId) && <Exam isName={name} targets={AttemptYearList} setExamId={setExamId} />}
                </div>
            </div>
    );
};



export default Enrollments;

