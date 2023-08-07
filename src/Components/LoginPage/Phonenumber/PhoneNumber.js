import { useEffect, useRef, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { OTPSender, verifiOTP } from '../../Functions/Services';
import { FRONTEND_URLS } from '../../Links/Config';
import InputField from '../../Onboarding/Components/InputField';
import ButtonText from '../Comp/ButtonText';
import OtpInput from 'react-otp-input';
import { IoIosArrowBack } from 'react-icons/io'
import flag from '../../../Images/india-flag.png'






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

      if (otp.length == 4) {
        verifiOTP(Nonce, otp, navigate, phoneNumber, setOtpVerifi)
      }

    }, [access, userData, otp]
  )


  function OtpPageBack() {
    setOtpSend(false);
    setOtp('')
    const mess = document.getElementById("mess");
    mess.innerHTML = '';
  }


  return (

    (!OtpSend)
      ?
      (
        <>
          <div className='mainPage'>

            {/* <OnBordText isName='Hi 👋' /> */}

            <div className='nameAskingSection'>
              <div className='nameQue'> Enter Phone Number </div>
              <div className='messageSec'> We’ll send you an OTP for verification. </div>


              <input ref={PhoneRef} maxLength="10" type="text" placeholder='Enter your Phone Number here.' className='focused_input' />

            </div>

            <div id='mess'></div>

            <div className="buttonclass">

              <div className='TermsAndCond'> By continuing, you agree to our <a href='https://www.esaral.com/terms-and-condition/'>Terms and Conditions.</a> </div>

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
                <button className='subject' style={{ width: "0%" }} onClick={OtpPageBack}>
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

            <div className='OtpNotRecieve'>Didn’t recieve the OTP? <button style={{ width: "0%" }} className='subject OtpNotRecieveBut' onClick={() => {
              OTPSender(phoneNumber, setOtpSend, setNonce, setErro, redirect)
            }}>Resend</button>
            </div>

            <div className='OtpNotRecieve'>
              Still facing difficulties? <a className='OtpNotRecieveBut' href='https://www.esaral.com/contact '> Contact Us</a>
            </div>
          </div>

        </>
      )


  );
}

export default PhoneNumber;
