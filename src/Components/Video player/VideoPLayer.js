import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoFun } from "../Functions/Services";
// import "./styles.css";

export default function VideoPlayer() {

  const { video_id } = useParams()

  console.log('under the video player ', video_id)

  const [vidInfo, setVideoInfo] = useState()

  useEffect(
    () => {
      VideoFun(video_id, setVideoInfo)
    },[video_id]
  )

  return (
    vidInfo?.otp 
    ?
    <div className="App">

      <iframe
      src=
      {`https://player.vdocipher.com/v2/?otp=${vidInfo.otp}&playbackInfo=${vidInfo.playbackInfo}&primaryColor=#4245ef`}
      frameborder="0"
      allow="encrypted-media"
      allowfullscreen
    ></iframe>


    </div>
    :
    <>Loading...</>
  );
}
