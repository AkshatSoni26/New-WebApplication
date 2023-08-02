import React, { useEffect, useState } from 'react';
import '../../CSS/Register.css'
import Name from './Name';
import RightSlider from '../LoginPage/rightSlider';
import AttemptYear from './AttemptYear';
import Exam from './Exam';
import CourseSettingup from './CourseSettingup';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    console.log('Register')
    

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
            <div className='rightPortion'>

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