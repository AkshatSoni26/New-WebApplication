import { useEffect, useRef, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { OTPSender, verifiOTP } from '../../Functions/Services';
import { FRONTEND_URLS } from '../../Links/Config';
import InputField from '../../Onboarding/Components/InputField';
import ButtonText from '../Comp/ButtonText';
import OtpInput from 'react-otp-input';
import { IoIosArrowBack } from 'react-icons/io'





function PhoneNumber() {

  console.log('PhoneNumber')

  const [phoneNumber, setPhoneNumber] = useState();
  const [Nonce, setNonce] = useState('')
  const [OtpSend, setOtpSend] = useState(false)
  const [otpVerifi, setOtpVerifi] = useState(false)
  const [otp, setOtp] = useState('');

  const PhoneRef = useRef(null)
  const OtpRef = useRef(null)

  const [erro, setErro] = useState(false)

  const navigate = useNavigate()
  const access = localStorage.getItem('Access Key')
  const userData = localStorage.getItem('userData')

  useEffect(
    () => {

      access && userData && navigate(FRONTEND_URLS.HOME_ROUTE)
      // if (access && userData) {
      //   navigate(FRONTEND_URLS.HOME_ROUTE)
      // }

    }, [access, userData]
  )


  function OtpPageBack() {
    setOtpSend(false);
    setOtp('')
    const mess = document.getElementById("mess");
    mess.innerHTML = '' ;
  }


  return (

    (!OtpSend)
      ?
      (
        <>
          <div className='mainPage'>

            {/* <OnBordText isName='Hi 👋' /> */}

            <InputField inputRef={PhoneRef} Que='Enter Phone Number' messSec='We’ll send you an OTP for verification' variable={'Phone Number'} />

            <div id='mess'></div>

            <div className="buttonclass">

              <div className='TermsAndCond'> By continuing, you agree to our <a href='#'>Terms and Conditions.</a> </div>

              <button className='btn buttonBAckground' type="submit"
                onClick={() => {
                  OTPSender(PhoneRef.current.value, setOtpSend, setNonce, setErro, redirect)
                  setPhoneNumber(PhoneRef.current.value)
                  console.log("OTPSender", PhoneRef.current.value)
                }}
              >
                <ButtonText />
              </button>


            </div>

          </div>
        </>
      )
      :

      (
        <>

          <div className='mainPage '>
            {console.log('OtpRef', otp)}

            {/* <InputField inputRef={OtpRef} Que='Verify OTP' OtpNotRecieve={`Didn’t recieve the OTP? ${anc}`} messSec={`OTP sent to +91 ${phoneNumber}.`} variable={'OTP'} /> */}

            <div className='nameAskingSection'>

              <div className='OtpBackBut'>
                <button className='subject' onClick={OtpPageBack}>
                  <IoIosArrowBack size={30} color='black' />
                </button>
              </div>

              <div className='nameQue'>Verify OTP</div>

              <div className='messageSec'>{`OTP sent to +91 ${phoneNumber}.`}</div>

              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                inputStyle='Otp_Box'
                containerStyle='Otp_Conta'
                // renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
              // shouldAutoFocus={true}
              />

            </div>

            <div id='mess'></div>

            <div className='OtpNotRecieve'>Didn’t recieve the OTP? <button className='subject OtpNotRecieveBut' onClick={() => {
              OTPSender(phoneNumber, setOtpSend, setNonce, setErro, redirect)
            }}>Resend</button>
            </div>

            <div className='OtpNotRecieve'>
              Still facing difficulties? <a className='OtpNotRecieveBut'> Contact Us</a>
            </div>


            <div className="buttonclass">

              <button className='btn buttonBAckground' type="submit"
                onClick={() => {
                  verifiOTP(Nonce, otp, navigate, phoneNumber, setOtpVerifi);
                }}
              >
                <ButtonText />
              </button>
            </div>
          </div>

        </>
      )


  );
}

export default PhoneNumber;
