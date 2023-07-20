import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ChapterScroll, VideoFun } from "../Functions/Services";
import { useSelector } from "react-redux";
// import "./styles.css";

export default function VideoPlayer() {
  console.log("VideoPlayer")

  const [vidInfo, setVideoInfo] = useState()

  const currentUrl = window.location.href;

  // Extract the segments from the URL
  const urlSegments = currentUrl.split('/');
  const urlLastSegment = urlSegments[urlSegments.length - 1]
  useEffect(
    () => {

      // console.log('currentUrl under the one video button', currentUrl)

      VideoFun(urlLastSegment, setVideoInfo)


    }, [urlLastSegment]
  )

  return (
    vidInfo?.otp
      ?
      <div className="App">

        {urlLastSegment && ChapterScroll(urlLastSegment)}

        <iframe
          src=
          {`https://player.vdocipher.com/v2/?otp=${vidInfo.otp}&playbackInfo=${vidInfo.playbackInfo}&primaryColor=#4245ef`}
          frameBorder="0"
          style={{
            border: '0',
            width: '720px',
            height: '405px',
          }}
          allow="encrypted-media"
          allowFullScreen
        ></iframe>


      </div>
      :
      <>Loading...</>
  );
}
