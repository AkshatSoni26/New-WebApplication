import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChapterScroll, VideoFun } from "../Functions/Services";
import { useSelector } from "react-redux";
import PDFViewer from "../PDFViewer/PDFViewer";
import SpinnerFun from "../SpinnerFun/SpinnerFun";
import { MDBContainer, MDBIframe } from "mdbreact";
import { FRONTEND_URLS } from "../Links/Config";
import Scroller from "../SpinnerFun/Scroller";

// import "./styles.css";

export default function VideoPlayer() {
  console.log("VideoPlayer")

  const navigate = useNavigate()

  const [vidInfo, setVideoInfo] = useState()
  const currentUrl = window.location.href;

  // Extract the segments from the URL
  const urlSegments = currentUrl.split('/');
  var urlLastSegment = null

  try {
    urlLastSegment = urlSegments[urlSegments.length - 1]
  }

  catch (err) {
    console.log('err', err)
    navigate(FRONTEND_URLS.LOGIN_ROUTE)
  }

  useEffect(
    () => {

      if (urlLastSegment == 'PDF') {
        console.log('under the videoPlayer')
      }
      else {
        VideoFun(urlLastSegment, setVideoInfo, navigate)
      }


    }, [urlLastSegment]
  )

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && ref.current.tagName === 'IFRAME') {
      setTimeout(() => {
        ref.current.play();
      }, 1000);
    }
  }, [vidInfo]);

  return (

    (urlLastSegment == 'PDF') ?

      <PDFViewer />
      // <>Loading......</>
      :
     vidInfo?.otp
        &&
        <div className="ratio ratio-16x9" >
          {urlLastSegment && ChapterScroll(urlLastSegment)}

          <iframe
            src=
            {`https://player.vdocipher.com/v2/?otp=${vidInfo.otp}&playbackInfo=${vidInfo.playbackInfo}&primaryColor=#4245ef`}

            allow=" encrypted-media"
            allowFullScreen
          ></iframe>

        </div>
        
        // <Scroller />
  );
}