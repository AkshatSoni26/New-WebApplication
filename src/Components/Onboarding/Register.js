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


    return (
        <div className='LoginPage'>
            <div className='RightSide'>
                <RightSlider />
            </div>
            <div className='LeftSide'>

                { (!isName) && <Name setIsName={setIsName}/> }

                { (isName) && <AttemptYear isName={isName}/> } 

                {/* { (isName) && <Exam isName={isName}/> }  */}

                {/* { (isName) && <CourseSettingup isName={isName}/> }  */}



            </div>

        </div>
    );
};

export default Register;