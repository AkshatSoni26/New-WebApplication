import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoFun } from "../Functions/Services";
import { useSelector } from "react-redux";
// import "./styles.css";

export default function VideoPlayer() {

  const { video_id } = useParams()

  console.log('under the video player ', video_id)

  const revideo_id = useSelector( state => state.re_video_id)
  console.log('VideoPlayer', revideo_id)

  const [vidInfo, setVideoInfo] = useState()

  useEffect(
    () => {
      VideoFun(video_id, setVideoInfo)
    }, [video_id]
  )

  return (
    vidInfo?.otp
      ?
      <div className="App">

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
