import React, { memo, useEffect, useState } from "react";
import { DefaultThumbnails } from "../../../Constants/Constants";
import "../../../CSS/App.css";
import ThumbnailDur from "../../Thumbnail/ThumbnailDur";
import ThumbanailButton from "../../Thumbnail/ThumbanailButton";
import LottieImage from "../../LottieImage/LottieImage";
import SpinnerFun from "../../SpinnerFun/SpinnerFun";
import OverLayFunction from "../../../Utility/OverLayFunction";
import Scroller from "../../SpinnerFun/Scroller";

const ChapterPageVideoButton = ({ content_info, currentUrl }) => {
  console.log("ChapterPageVideoButton");

  const [urlPar, setUrlPar] = useState();

  useEffect(() => {
    const urlSegments = currentUrl.split("/");
    setUrlPar(urlSegments[urlSegments.length - 1]);
  }, [currentUrl]);

  return(

  //  currentUrl ? (
    <div className="VidThum">

      <div>
        <img
          className="accordianImage"
          src={
            content_info?.thumbnail
              ? content_info.thumbnail
              : DefaultThumbnails.video
          } alt="" />
      </div>
      
      {
        urlPar === content_info.video_id
          ?
          <LottieImage />
          :
          <>
          <ThumbanailButton />

      <ThumbnailDur duration={content_info.duration} />
      </>
        }

    </div>
  // ) : (
  //   <Scroller />  
  // )

  );
};

export default memo(ChapterPageVideoButton);
