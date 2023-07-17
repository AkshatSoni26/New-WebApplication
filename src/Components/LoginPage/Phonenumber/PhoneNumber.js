import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { country_code, testingNumber } from '../../../Constants/Constants'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../State';
import { BACKEND_URLS, FRONTEND_URLS } from '../../Links/Config';
// import { context_api } from '../../App';


function PhoneNumber() {

  console.log('11111111111111111111')

  const [phoneNumber, setPhoneNumber] = useState(testingNumber);
  const [Nonce, setNonce] = useState('')
  const [Otp, setOtp] = useState('')
  const [OtpSend, setOtpSend] = useState(false)

  const dispatch = useDispatch()
  const { AccessKey } = bindActionCreators(actionCreators, dispatch)

  const { OTP_SENDER, USER_DATA_PROVIDER, USER_DATA } = BACKEND_URLS

  const navigate = useNavigate()

  function OTPSender() {

    axios.post(
      OTP_SENDER, {
      country_code: country_code,
      phone_number: phoneNumber,
    }
    ).then(
      (response) => {
        if (response.data.message === 'OTP Sent Successfully') {

          const nonce = response.data.data.nonce
          setOtpSend(true)

          setNonce(nonce)

          // verifiOTP(nonce,otp)

        }
      }
    ).catch(
      (error) => {
        console.log(error.message)
      }
    )
  }

  function verifiOTP(nonce, otp) {
    axios.put(
      OTP_SENDER, {
      country_code: country_code,
      phone_number: phoneNumber,
      nonce: nonce,
      otp: otp
    }
    ).then(
      (response) => {

        if (response.data.message === 'OTP Verified Successfully') {
          const nonce = response.data.data.nonce
          UserDataProvider(nonce)

        }
      }
    ).catch(
      (error) => {
        console.log('under the verifiOTP', error)
      }
    )
  }

  function UserDataProvider(nonce) {

    axios.post(USER_DATA_PROVIDER,
      {
        country_code: country_code,
        phone_number: phoneNumber,
        nonce: nonce,
        widevine: "UD6FE3hQlNFslkFhNiHmxL02Jrf4BlVfO+KskxHBs5g=",
        widevine_level: "L1",
        imei: "UD6FE3hQlNFslkFhNiHmxL02Jrf4BlVfO+KskxHBs5g=",
        id_organization: "1",
        firebase_notification_token:
          "f5aoEZM9Tu6gdd7lEMy58p:APA91bHSt0cBMyb875QZ2SpNl9rnMZOo3rRjWWEIq-J0dtr7khAuNV3BG6ea4wUsVGPO4kuNgwWVhGF2gz99Fm2dk5kgmgcbKKW4XPah6UHHRkaKlxEvgI49rvTmkMxj7uzeKOsXAcri",
        device_name: "Xiaomi",
        os: "Redmi K20 Pro",
        os_version: 30,
      }
    ).then(
      (response) => {
        const access = response.data.data.tokens.access
        UserData(access)
      }
    ).catch(
      (error) => {
        console.log('under the user data function error', error)
      }
    )
  }

  function UserData(access) {

    // setAccess(access)
    AccessKey(access)

    localStorage.setItem('Access Key', access)

    axios.post(USER_DATA,

      { "switch_target_subcourse_id": 0, "switch_phase_id": 0, },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access
        }
      }
    ).then(
      (response) => {
        localStorage.setItem('userData', JSON.stringify(response.data.data))
        // localStorage.setItem('Access', JSON.stringify(access))
        navigate(FRONTEND_URLS.HOME_ROUTE)
      }
    ).catch(
      (error) => {
        console.log('under the userdata error', error)
      }
    )

  }

  return (
    !OtpSend ?

      <div className='mb-3'>

        <input type="text" placeholder="Enter Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

        <button className='btn btn-primary' type="submit" onClick={OTPSender}>
          Submit
        </button>
      </div>
      :

      <div className='mb-3'>

        <input type="text" placeholder="Enter OTP" value={Otp} onChange={(e) => setOtp(e.target.value)} />

        <button className='btn btn-primary' type="submit" onClick={() => verifiOTP(Nonce, Otp)}>
          Submit
        </button>
      </div>

  );
}

export default PhoneNumber;
