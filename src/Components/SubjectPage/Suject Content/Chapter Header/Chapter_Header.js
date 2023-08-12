import React from "react";
import "../../../../CSS/App.css";
import { BsChevronRight } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { ChapterNavigator } from "../../../Functions/Services";



const Chapter_Header = ({ chapterId, subjectId, display_name, lecLen, init_video_id }) => {

  
  const navigate = useNavigate()

  return (
    <div>
      <div className="chapterHeader">

        <div className=' chapterHeaderButton'>

          <div className=" subject ProgressPart" style={{marginBottom:'0%', paddingTop:'0'}}>
            <div className="ChapLec" onClick={ () => {
            ChapterNavigator(subjectId, chapterId, navigate, init_video_id)
          }}  >
              <div className="chapterName">{display_name}</div>
              <div className="lecturesLength">Lectures: {lecLen}</div>
            </div>
          </div>


          <div className="rightArrow subject" onClick={ () => {
            ChapterNavigator(subjectId, chapterId, navigate, init_video_id)
          }}  >
            <BsChevronRight size={24} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Chapter_Header;
