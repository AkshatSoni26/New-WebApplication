import React, { useState } from 'react';
import '../../CSS/App.css'

import '../../CSS/App.css'
import Name from './Name';
import RightSlider from '../LoginPage/rightSlider';
import OnboardingAttemptYear from './OnboardingAttemptYear';


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

                { (isName) && <OnboardingAttemptYear isName={isName}/> } 

            </div>

        </div>
    );
};

export default Register;