import React, { useEffect, useState } from 'react';
import { OTPSender } from '../../Functions/Services';

const CountdownTimer = ({phoneNumber, setOtpSend, setNonce, setErro, redirect}) => {

    const [counter, setCounter] = useState(30)


    useEffect(
        () => {

            counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

        }, [counter]
    )

    return (
        <div>
            {
                (counter == 0)
                    ?
                    <a className='OtpNotRecieveBut'  style={{ width: "0%" }} onClick={() => {
                        OTPSender(phoneNumber, setOtpSend, setNonce, setErro, redirect)
                    }}> Resend</a>
                    :
                    // <div id="Timer"> {seconds}</div>
                    <div className=''>
                        00:{counter<10 ? '0':<></>}{counter}
                    </div>
            }

        </div>
    );
}


export default CountdownTimer;