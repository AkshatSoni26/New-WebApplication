import { useEffect, useRef, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { testingNumber } from '../../../Constants/Constants'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../State';
import { OTPSender, verifiOTP } from '../../Functions/Services';
import { FRONTEND_URLS } from '../../Links/Config';
import OnBordText from '../../Onboarding/Components/OnBordText';
import InputField from '../../Onboarding/Components/InputField';
import ButtonLo from '../../Onboarding/Components/ButtonLo';
import { AiOutlineArrowRight } from 'react-icons/ai'




function PhoneNumber() {

  console.log('PhoneNumber')

  const [phoneNumber, setPhoneNumber] = useState(testingNumber);
  const [Nonce, setNonce] = useState('')
  const [OtpSend, setOtpSend] = useState(false)
  const [otpVerifi, setOtpVerifi] = useState(false)

  const PhoneRef = useRef(null)
  const OtpRef = useRef(null)

  const [erro, setErro] = useState(false)

  const navigate = useNavigate()
  const access = window.atob(localStorage.getItem('Access Key'))
  const userData = window.atob(localStorage.getItem('userData'))

  useEffect(
    () => {
      
      access && userData && navigate(FRONTEND_URLS.HOME_ROUTE)
      // if (access && userData) {
      //   navigate(FRONTEND_URLS.HOME_ROUTE)
      // }

    }, [access, userData]
  )


  return (

    (!OtpSend)
      ?
      (
      <>
        <div className="container">
          <div className="row">
            <div className='mainPage mb-3'>

              <OnBordText isName='Hi 👋'
              // startLine='Let’s customize your eSaral journey'
              />

              <InputField inputRef={PhoneRef} Que='Enter your Phone Number' variable={'Phone Number'} />


              {console.log('phone number InputField', PhoneRef)}

              <div id='mess'></div>

            </div>

            <br></br>

            <div className=" buttonclass col text-center">

              <button className='btn buttonBAckground' type="submit"
                onClick={() => {
                  OTPSender(PhoneRef.current.value, setOtpSend, setNonce, setErro, redirect)
                  setPhoneNumber(PhoneRef.current.value)
                  console.log("OTPSender", PhoneRef.current.value)
                }}
              >
                <div style={{ color: '#fff' }}>
                  Continue <AiOutlineArrowRight color='#fff' />
                </div>
              </button>

            </div>

          </div>
        </div>
      </>
      )
      :

      (
      <>
            <div className="container">
          <div className="row">
            <div className='mainPage mb-3'>

            <InputField inputRef={OtpRef} Que='Enter your OTP' variable={'OTP'} />

            <div id='mess'></div>

            </div>
            <br></br>
            <div className=" buttonclass col text-center">  
              <button
                className='btn buttonBAckground'
                type="submit"
                onClick={() => {
                  verifiOTP(Nonce, OtpRef.current.value, navigate, phoneNumber, setOtpVerifi);
                  // console.log(  phoneNumber)
                }}
              >
                <div style={{ color: '#fff' }}>
                  Continue <AiOutlineArrowRight color='#fff' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </>
      )


  );
}

export default PhoneNumber;
