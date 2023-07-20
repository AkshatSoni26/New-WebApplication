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
            // re_video_id( init_video_id)
          }
        }
          className='subject  chapterHeaderButton'>
          <div className="ProgressPart">
            <div className="Progress">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="24"
                  stroke="#E6E7E9"
                  strokeWidth="3"
                />
              </svg>
            </div>

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
