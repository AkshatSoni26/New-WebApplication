import React from 'react';

import Lottie from "lottie-react";

import animationData from '../lottie/playing image.json';

import '../../CSS/App.css'

const Register = () => {


    return (
        <div>

            <div className='playbuttondiv'>
                <div className='playbutton lottie'>
                    <Lottie animationData={animationData} loop={true} />
                </div>
            </div>

        </div>
    );
};

export default Register;