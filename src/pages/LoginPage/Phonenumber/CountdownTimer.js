import React, { useEffect, useState } from 'react';
import { OtpTimer } from '../../../Constants/Constants';
import { OTPSender } from '../../../Functions/Services';

const CountdownTimer = ({ phoneNumber, setOtpSend, setNonce, setErro, redirect, ContactUs, setContactUs }) => {

    const [counter, setCounter] = useState(OtpTimer)
    const [ResendClick, setResendClick] = useState(false)

    useEffect(
        () => {
            if (ResendClick == true)
            {  
            ContactUs > 0 && setTimeout(() => setContactUs(ContactUs - 1), 1000);
            console.log("ContactUs", ContactUs, ResendClick);
            }
        }, [ContactUs, ResendClick]
    )

    useEffect(
        () => {
                counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
                console.log("counter", counter)
        }, [counter]
    )

    return (
        <div>
            {
                (counter == 0)
                    ?
                    <a className='OtpNotRecieveBut' style={{ width: "0%" }} onClick={() => {
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