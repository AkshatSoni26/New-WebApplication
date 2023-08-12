import { useEffect, useRef, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { OTPSender, verifiOTP } from '../../Functions/Services';
import { FRONTEND_URLS } from '../../Links/Config';
import ButtonText from '../Comp/ButtonText';
import OtpInput from 'react-otp-input';
import { IoIosArrowBack } from 'react-icons/io'
import flag from '../../../Images/india-flag.png'
import CountdownTimer from './CountdownTimer';
import { OtpTimer } from '../../../Constants/Constants';
import { InputBox } from '../../Parts/InputBox';



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

  const [ContactUs, setContactUs] = useState(OtpTimer)



  useEffect(
    () => {

      access && userData && navigate(FRONTEND_URLS.HOME_ROUTE)

      if (otp.length == 4) {
        verifiOTP(Nonce, otp, navigate, phoneNumber, setOtpVerifi)
      }

    }, [access, userData, otp]
  )


  function OtpPageBack() {
    window.location.reload()
  }



  return (

    (!OtpSend)
      ?
      (
        <>
          <div className='mainPage PhoneNumberTrial'>

            <div className='nameAskingSection'>
              <div className='nameQue'> Enter Phone Number </div>
              <div className='messageSec'> We’ll send you an OTP for verification. </div>
              <InputBox PhoneRef={PhoneRef} />
              <div id='mess'></div>
            </div>


            <div className="buttonclass extraPho">
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
                shouldAutoFocus={true}
                renderInput={(props) => <input {...props} />}
              />

            </div>

            <div id='mess'></div>

            <div className='OtpNotRecieve'>Didn’t recieve the OTP? &nbsp;
              <CountdownTimer phoneNumber={phoneNumber} setOtpSend={setOtpSend} setNonce={setNonce} setErro={setErro} redirect={redirect} ContactUs={ContactUs} setContactUs={setContactUs} />
            </div>

            {
              (ContactUs == 0) &&
              <div className='OtpNotRecieve'>
                Still facing difficulties? &nbsp; <a className='OtpNotRecieveBut' href='https://www.esaral.com/contact '>  Contact Us</a>
              </div>
            }
          </div>

        </>
      )


  );
}

export default PhoneNumber;
