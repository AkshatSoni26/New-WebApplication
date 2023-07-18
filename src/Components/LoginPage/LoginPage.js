import React from 'react';
import '../../CSS/App.css'
import PhoneNumber from './Phonenumber/PhoneNumber';
import RightSlider from './rightSlider';


function LoginPage() {

    console.log('11111111111111111111')

    return (
        <div className='LoginPage'>
            <div className='RightSide'>
                <RightSlider />
            </div>

            <div className='LeftSide'>
                <PhoneNumber />
            </div>
        </div>
    );
}

export default LoginPage;