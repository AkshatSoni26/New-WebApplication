import { BACKEND_URLS, FRONTEND_URLS } from '../Links/Config';
import axios from 'axios';
import { country_code } from '../../Constants/Constants';

//----------------------------- faculti responsive data  ---------------------------------- //
export const Faculti_Responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

//----------------------------- Login page caursal images  ---------------------------------- //
export const IMG = [
    {
        'url': require('../../Images/Learn.png'),
        'heading': 'Learn',
        'text': 'Kota\'s top IITian and Doctor faculties./n Amazing visualisation to understand any concept easily.'
    },
    {
        'url': require('../../Images/Practice.png'),
        'heading': 'Practice',
        'text': 'Chapter-wise sheets and PYQs with detailed solutions.'
    },
    {
        'url': require('../../Images/Revise.png'),
        'heading': 'Revise',
        'text': 'Quickly revise the syllabus with crystallized videos, mind maps and notes.'
    },
    {
        'url': require('../../Images/Test.png'),
        'heading': 'Test',
        'text': 'Latest Pattern tests from expert faculties with detailed analysis.'
    }
]


//----------------------------- Service Functions ---------------------------------- //


// home page navbar giving the current course enrollment
export function currCourse(course) {
    if (course.is_current === true) {
        return course
    }
}


//-------------------------------------------------------------------------------------//
export function OTPSender(phoneNumber, setOtpSend, setNonce, setErro, redirect) {

    axios.post(
      BACKEND_URLS.OTP_SENDER, {
      country_code: country_code,
      phone_number: phoneNumber,
    }
    ).then(
      (response) => {
        if (response.data.message === 'OTP Sent Successfully') {
          const nonce = response.data.data.nonce
          console.log("under the phone NUmbe", response.data.message)
          setOtpSend(true)
          setNonce(nonce)
        }
      }
    ).catch(
      (error) => {
        console.log(error.message)
        setErro(true)
        redirect(`/${error.message}`)
      }
    )
  }


//-------------------------------------------------------------------------------------//
export function verifiOTP(nonce, otp, navigate, phoneNumber) {

    console.log('under the verifi otp')

    axios.put(
        BACKEND_URLS.OTP_SENDER, {
        country_code: country_code,
        phone_number: phoneNumber,
        nonce: nonce,
        otp: otp
    }
    ).then(
        (response) => {
            if (response.data.message === 'OTP Verified Successfully') {
                const nonce = response.data.data.nonce
                UserDataProvider(nonce, navigate, phoneNumber)

                console.log('under the response otp verified successfully.')
            }
        }
    ).catch(
        (error) => {
            console.log('under the verifiOTP', error)
            navigate(`/${error.message}`)

        }
    )
}


//-------------------------------------------------------------------------------------//
export function UserDataProvider(nonce, navigate, phoneNumber) {

    axios.post(BACKEND_URLS.USER_DATA_PROVIDER,
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
            UserData(access, navigate)
        }
    ).catch(
        (error) => {
            console.log('under the user data function error', error)
            navigate(`/${error.message}`)

        }
    )
}


//-------------------------------------------------------------------------------------//

export function UserData(access, navigate) {


    const { USER_DATA } = BACKEND_URLS

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
            navigate(FRONTEND_URLS.HOME_ROUTE)
        }
    ).catch(
        (error) => {
            console.log('under the userdata error', error)
            navigate(`/${error.message}`)
        }
    )
}


//-------------------------------------- Chapter scroll -----------------------------------------------//
export function ChapterScroll(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth"});
}

//-------------------------------------- Chapter navigator -----------------------------------------------//
export function ChapterNavigator(subjectId, chapterId, intialChaDa, navigate, LearnData) {
    navigate(`/${subjectId}/${chapterId}`, { state: [Number(subjectId), chapterId] })
    LearnData(intialChaDa)
  }