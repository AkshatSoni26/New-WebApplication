import React, { useEffect } from 'react';
import PhoneNumber from './Phonenumber/PhoneNumber';
import RightSlider from './rightSlider';
import { FRONTEND_URLS } from '../Links/Config';
import { useNavigate } from 'react-router-dom';
import '../../CSS/App.css'
import '../../CSS/Phone.css'
import '../../CSS/Tab.css'




function LoginPage() {

    console.log('LoginPage')

    const reg = localStorage.getItem('reg')
    const access = localStorage.getItem('Access Key')
    const userData = localStorage.getItem('userData')
    const navigate = useNavigate()

    useEffect(
        () => {
            if (reg && access)
            {
                navigate(FRONTEND_URLS.REGISTER_ROUTE, { state: access })
            }
            else if (access && userData){
                navigate(FRONTEND_URLS.HOME_ROUTE)
            }
            else if (access){
                localStorage.clear()
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }
        },[reg]
    )


    return (
        <div className='LoginPage'>
            <div className='leftPortion'>
                <RightSlider />
            </div>

            <div className='rightPortion'>
                <PhoneNumber />
            </div>
        </div>
    );
}

export default LoginPage;