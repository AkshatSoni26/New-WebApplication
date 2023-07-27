import React, { useEffect } from 'react';
import '../../CSS/App.css'
import PhoneNumber from './Phonenumber/PhoneNumber';
import RightSlider from './rightSlider';
import { FRONTEND_URLS } from '../Links/Config';
import { useNavigate } from 'react-router-dom';


function LoginPage() {

    console.log('LoginPage')

    const reg = localStorage.getItem('reg')
    const access = window.atob(localStorage.getItem('Access Key'))
    const navigate = useNavigate()

    useEffect(
        () => {
            if (reg && access)
            {
                navigate(FRONTEND_URLS.REGISTER_ROUTE, { state: access })
            }
            if (access){
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }
        },[]
    )


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