import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { testingNumber } from '../../../Constants/Constants'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../State';
import { OTPSender, verifiOTP } from '../../Functions/Services';


function PhoneNumber() {

  console.log('PhoneNumber')

  const [phoneNumber, setPhoneNumber] = useState(testingNumber);
  const [Nonce, setNonce] = useState('')
  const [Otp, setOtp] = useState('')
  const [OtpSend, setOtpSend] = useState(false)

  const dispatch = useDispatch()
  const { AccessKey } = bindActionCreators(actionCreators, dispatch)

  const [erro, setErro] = useState(false)


  const navigate = useNavigate()


  return (

    (!OtpSend)

      ?

      <div className='mb-3'>

        <input type="text" placeholder="Enter Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <br></br>
        <button className='btn btn-primary' type="submit" onClick={ () => OTPSender(phoneNumber, setOtpSend, setNonce, setErro, redirect) }>
          Submit
        </button>

      </div>
      :

      <div className='mb-3'>

        <input type="text" placeholder="Enter OTP" value={Otp} onChange={(e) => setOtp(e.target.value)} />
        <br></br>
        <button className='btn btn-primary' type="submit" onClick={() => verifiOTP(Nonce, Otp, navigate, phoneNumber)}>
          Submit
        </button>

      </div>
    // :
    // <div>
    //   error
    // </div>

  );
}

export default PhoneNumber;
