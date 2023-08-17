import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RightSlider from '../../pages/LoginPage/rightSlider';
import Name from './Name';
import AttemptYear from './AttemptYear';
import Exam from './Exam';
import CourseSettingup from './CourseSettingup'


const Register = () => {

    console.log('Register')

    const location = useLocation() 

    const access = localStorage.setItem('Access Key', location.state)

    const [ isName , setIsName] = useState("")
    const [AttemptYearList, setAttemptYearList]  = useState()
    const [ExamId, setExamId] = useState()
    const navigate = useNavigate()


    useEffect( 
        () => {
            if (localStorage.getItem("Access Key") && localStorage.getItem("userData") ){
                navigate('/')
            }
        },[]
    )


    return (
        <div className='LoginPage'>
            <div className='leftPortion'>
                <RightSlider />
            </div>
            <div className='rightPortion scrollingOnBording'>

                { (!isName) && <Name setIsName={setIsName}/> }

                { (isName) && (!AttemptYearList) && <AttemptYear isName={isName} 
                setAttemptYearList={setAttemptYearList}/> }      {/* from this it gives the list of offeres */}

                { (AttemptYearList) && (!ExamId) && <Exam isName={isName} targets={AttemptYearList} setExamId={setExamId}/> }      {/* It gives the id */}

                { (ExamId) && <CourseSettingup id={ExamId}/> } 

            </div>

        </div>
    );
};

export default Register;