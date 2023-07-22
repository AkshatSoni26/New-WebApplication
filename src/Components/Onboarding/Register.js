import React, { useState } from 'react';
import '../../CSS/Register.css'
import Name from './Name';
import RightSlider from '../LoginPage/rightSlider';
import AttemptYear from './AttemptYear';
import Exam from './Exam';
import CourseSettingup from './CourseSettingup';



const Register = () => {

    console.log('Register')

    const [ isName, setIsName] = useState()
    const [AttemptYearList, setAttemptYearList]  = useState()
    const [ExamId, setExamId] = useState()


    return (
        <div className='LoginPage'>
            <div className='RightSide'>
                <RightSlider />
            </div>
            <div className='LeftSide'>

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