import React from "react";
import { BACKEND_URLS, FRONTEND_URLS } from "../Links/Config";
import axios from "axios";
import { BorderColors, Colors, alert_circle, country_code } from "../../Constants/Constants";
import ColorButton from "../Onboarding/Components/ColorButton";
import ColorButton2 from "../Onboarding/Components/ColorButton2";

//----------------------------- faculti responsive data  ---------------------------------- //
export const responsive = (a) => {
  return {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: a,
      slidesToSlide: 1, // optional, defaults to 1.
    },
    tablet: {
      breakpoint: { max: 1220, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, defaults to 1.
    },
    mobile: {
      breakpoint: { max: 930, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, defaults to 1.
    },
  };
};

//----------------------------- Login page caursal images  ---------------------------------- //
export const IMG = [
  {
    url: require("../../Images/Learn.png"),
    heading: "Learn",
    text: "Kota's top IITian and Doctor faculties. Amazing visualisation to understand any concept easily.",
  },
  {
    url: require("../../Images/Practice.png"),
    heading: "Practice",
    text: "Chapter-wise sheets and PYQs with detailed solutions.",
  },
  {
    url: require("../../Images/Revise.png"),
    heading: "Revise",
    text: "Quickly revise the syllabus with crystallized videos, mind maps and notes.",
  },
  {
    url: require("../../Images/Test.png"),
    heading: "Test",
    text: "Latest Pattern tests from expert faculties with detailed analysis.",
  },
];

//----------------------------- Service Functions ---------------------------------- //

// home page navbar giving the current course enrollment
export function currCourse(course) {
  if (course.is_current === true) {
    return course;
  }
}

//-------------------------------------------------------------------------------------//
export function OTPSender(
  phoneNumber,
  setOtpSend,
  setNonce,
  setErro,
  redirect
) {
  const format = /[0-9]/;

  if (format.test(phoneNumber) && phoneNumber.length == 10) {
    axios
      .post(BACKEND_URLS.OTP_SENDER, {
        country_code: country_code,
        phone_number: phoneNumber,
      })
      .then((response) => {
        if (response.data.message === "OTP Sent Successfully") {
          const mess = document.getElementById("mess");
          mess.innerHTML = "";

          const nonce = response.data.data.nonce;
          console.log("under the phone Number", response.data.message);
          setOtpSend(true);
          setNonce(nonce);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setErro(true);
        // redirect(`/${error.message}`)
      });
  } else {
    const mess = document.getElementById("mess");
    mess.innerHTML = alert_circle + ' ' + `Please enter a valid number first`;
    mess.style.color = "red";
  }
}

//-------------------------------------------------------------------------------------//
export function verifiOTP(nonce, otp, navigate, phoneNumber, setOtpVerifi) {

  // (Nonce, OtpRef.current.value, navigate, PhoneRef.current.value)
  
  console.log("under the verifi otp", phoneNumber, otp, nonce);

  const format = /[0-9]/;

  if (format.test(otp) && otp.length == 4) {
    axios
      .put(BACKEND_URLS.OTP_SENDER, {
        country_code: country_code,
        phone_number: phoneNumber,
        nonce: nonce,
        otp: otp,
      })
      .then((response) => {
        console.log("response", response.data.message)
        if (response.data.message === "Incorrect OTP" ){

          const mess = document.getElementById("mess");
          mess.innerHTML = alert_circle + ' ' + "Incorrect OTP";
          mess.style.color = "red";   
        } 
        else if (response.data.message === "OTP Verified Successfully") {
          const nonce = response.data.data.nonce;
          UserDataProvider(nonce, navigate, phoneNumber);
          setOtpVerifi(true)
          console.log("under the response otp verified successfully.");
        }
        
      })
      .catch((error) => {
        console.log("under the verifiOTP", error);
        navigate(`/${error.message}`);
      });
  }
else {
    const mess = document.getElementById("mess");
    mess.innerHTML = "Your OTP is wrong";
    mess.style.color = "red";
  }
}




//-------------------------------------------------------------------------------------//
export function UserDataProvider(nonce, navigate, phoneNumber) {
  axios
    .post(BACKEND_URLS.USER_DATA_PROVIDER, {
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
    })
    .then((response) => {
      const access = response.data.data.tokens.access;

      const is_course_assigned = response.data.data.is_course_assigned;
      const first_name = response.data.data.first_name

      console.log("is_course_assigned", is_course_assigned);

      // localStorage.setItem('Access Key', access)

      if (is_course_assigned == true) {
        Register(access, navigate,first_name);
        localStorage.setItem('reg', 'register')
      } 
      else {
        UserData(access, navigate);
      }
    })
    .catch((error) => {
      console.log("under the user data function error", error);
      navigate(`/${error.message}`);
    });
}

//-------------------------------------------------------------------------------------//
export function Register(access, navigate, ) {
  navigate(FRONTEND_URLS.REGISTER_ROUTE, { state: access });
}

//-------------------------------------------------------------------------------------//

export function UserData(access, navigate) {
  const { USER_DATA } = BACKEND_URLS;

  localStorage.setItem("Access Key", access);

  axios
    .post(
      USER_DATA,

      { switch_target_subcourse_id: 0, switch_phase_id: 0 },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access,
        },
      }
    )
    .then((response) => {
      localStorage.setItem("userData", JSON.stringify(response.data.data));
      navigate(FRONTEND_URLS.HOME_ROUTE);
    })
    .catch((error) => {
      console.log("under the userdata error", error);
      navigate(`/${error.message}`);
    });
}

//-------------------------------------- Chapter scroll -----------------------------------------------//
export function ChapterScroll(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}

//-------------------------------------- Chapter navigator -----------------------------------------------//
export function ChapterNavigator(
  subjectId,
  chapterId,
  navigate,
  init_video_id
) {
  navigate(`/${subjectId}/${chapterId}/${init_video_id}`);
}

//-------------------------------------- Chapter navigator -----------------------------------------------//
export function subjectPageData(SubjectData, subjectId, setSubjData) {
  axios
    .post(
      BACKEND_URLS.SUBJECT_DATA_API,
      {
        node_id: Number(subjectId),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("Access Key"),
        },
      }
    )
    .then((response) => {
      console.log("subject response", response.data.data.node_content_tree);
      localStorage.setItem(
        "data",
        JSON.stringify(response.data.data.node_content_tree)
      );
      SubjectData(response.data.data.node_content_tree);
      setSubjData(response.data.data.node_content_tree);
    })
    .catch((error) => {
      console.log("error response", error.response);
    });
}

//-------------------------------------- vIDEO OTP INFO -----------------------------------------------//
export function VideoFun(video_id, setVideoInfo) {
  // console.log('under the vido fun ')
  axios
    .post(
      BACKEND_URLS.VIDEO_OTP,
      {
        video_id: video_id,
        video_download: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("Access Key"),
        },
      }
    )
    .then((response) => {
      // console.log('under the Video fun response',response.data.data.video_otp)
      setVideoInfo(response.data.data.video_otp);
    })
    .catch((error) => {
      console.log("under the Video fun error", error);
    });
}

//-------------------------------------- test function -----------------------------------------------//
export function CourseSwitcher(phase_id, subcourses_id, navigate) {
  console.log("under the test function", phase_id, subcourses_id);

  const access = localStorage.getItem("Access Key");

  axios
    .post(
      BACKEND_URLS.USER_DATA,

      { switch_target_subcourse_id: subcourses_id, switch_phase_id: phase_id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + access,
        },
      }
    )
    .then((response) => {
      localStorage.setItem("userData", JSON.stringify(response.data.data));
      navigate(FRONTEND_URLS.HOME_ROUTE);
    })
    .catch((error) => {
      console.log("under the userdata error", error);
      navigate(`/${error.message}`);
    });
}

//-------------------------------------- toHoursAndMinutes -----------------------------------------------//
export function toHoursAndMinutes(totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);

  let seconds = totalSeconds % 60;
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;

  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  return { h: hours, m: minutes, s: seconds };
  // setTime(time)
}

//-------------------------------------------------------------------------------------//

export function ColorContainer(isName, CLASSES, setAttemptYearList) {
  const buttons = CLASSES.map((className, index) => {
    const color = Colors[index];
    const borderColor = BorderColors[index];

    return (
      <ColorButton
        setAttemptYearList={setAttemptYearList}
        key={index}
        isName={isName}
        className={className.class_name}
        targets={className.targets}
        color={color}
        borderColor={borderColor}
      />
    );
  });

  return buttons;

}

export function ColorContainerNew(CLASSES, setExamId) {
  const buttons = CLASSES.map((className, index) => {
    const color = Colors[index];
    const borderColor = BorderColors[index];

    return (
      <ColorButton2
        setExamId={setExamId}
        key={index}
        thumbnail={className.thumbnail}
        className={className.target_name}
        tag_line={className.tag_line}
        id={className.target_course_id}
        color={color}
        borderColor={borderColor}
      />
    );
  });

  return buttons;

}

