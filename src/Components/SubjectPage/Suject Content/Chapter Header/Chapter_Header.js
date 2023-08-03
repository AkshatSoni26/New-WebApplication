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
        <button onClick={
          () => {
            ChapterNavigator(subjectId, chapterId, navigate, init_video_id)
          }
        }
          className='subject chapterHeaderButton'>
          <div 
            className="ProgressPart"
              >
           

            <div className="ChapLec">
              <div className="chapterName">{display_name}</div>
              <div className="lecturesLength">Lectures: {lecLen}</div>
            </div>
          </div>


          <div className="rightArrow">
            <BsChevronRight size={24} />
          </div>

        </button>
      </div>
    </div>
  );
};

export default Chapter_Header;
