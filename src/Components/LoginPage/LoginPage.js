import React from 'react';
import '../../CSS/App.css'
import PhoneNumber from './Phonenumber/PhoneNumber';
import RightSlider from './rightSlider';
import Register from '../Onboarding/Register';


function LoginPage() {

    console.log('LoginPage')

    return (
        <div className='LoginPage'>
            <div className='RightSide'>
                <RightSlider />
            </div>

            <div className='LeftSide'>
                <PhoneNumber />
                {/* <Register /> */}
            </div>
        </div>
    );
}

export default LoginPage;