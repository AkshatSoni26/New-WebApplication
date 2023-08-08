import React, { useEffect, useState } from 'react';
import { OTPSender } from '../../Functions/Services';
import { OtpTimer } from '../../../Constants/Constants';

const CountdownTimer = ({ phoneNumber, setOtpSend, setNonce, setErro, redirect, ContactUs, setContactUs }) => {

    const [counter, setCounter] = useState(OtpTimer)
    const [ResendClick, setResendClick] = useState(false)

    // var a = 0

    useEffect(
        () => {
            if (ResendClick == true)
            {  
            ContactUs > 0 && setTimeout(() => setContactUs(ContactUs - 1), 1000);
            console.log("ContactUs", ContactUs, ResendClick);
            }
        }, [ContactUs, ResendClick]
    )

    // useEffect(
    //     () => {
    //         counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    //     }, [counter]
    // )

    useEffect(
        () => {

            
                counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
                // console.log('Resend Button Click', )
                console.log("counter", counter)
            

        }, [counter]
    )

    // function trial() {
    //     if (!ResendClick) {
    //         setResendClick(true)
    //         console.log('Resend button click')
    //     }
    // }

    return (
        <div>
            {
                (counter == 0)
                    ?
                    <a className='OtpNotRecieveBut' style={{ width: "0%" }} onClick={() => {
                        // !ResendClick && trial()
                        setResendClick(true)
                        OTPSender(phoneNumber, setOtpSend, setNonce, setErro, redirect, setCounter);
                    }}> Resend</a>
                    :
                    <div className=''>
                        00:{counter < 10 ? '0' : <></>}{counter}
                    </div>
            }

        </div>
    );
}


export default CountdownTimer;