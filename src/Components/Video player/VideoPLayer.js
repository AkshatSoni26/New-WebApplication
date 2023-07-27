import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChapterScroll, VideoFun } from "../Functions/Services";
import { useSelector } from "react-redux";
import PDFViewer from "../PDFViewer/PDFViewer";
import SpinnerFun from "../SpinnerFun/SpinnerFun";

// import "./styles.css";

export default function VideoPlayer() {
  console.log("VideoPlayer")

  const navigate = useNavigate()

  const [vidInfo, setVideoInfo] = useState()
  const currentUrl = window.location.href;

  // Extract the segments from the URL
  const urlSegments = currentUrl.split('/');
  const urlLastSegment = window.atob(urlSegments[urlSegments.length - 1])
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
        ?
        <div className="App">

          {urlLastSegment && ChapterScroll(urlLastSegment)}

          <iframe
            src=
            {`https://player.vdocipher.com/v2/?otp=${vidInfo.otp}&playbackInfo=${vidInfo.playbackInfo}&primaryColor=#4245ef`}
            frameBorder="0"
            // style={{
            //   width: '65vw',
            //   height: '76vh', // This will adjust the height based on the width
            //   // overflow:'auto'
            // }}
            width={840}
            height={472}
            allow="autoplay; encrypted-media; picture-in-picture full"
            // autoPlay

            allowFullScreen
            autoPlay
          ></iframe>


        </div>
        :

        <SpinnerFun />
  );
}