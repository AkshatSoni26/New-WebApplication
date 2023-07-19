import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ChapterPageVideoButton from './ChapterPageVideoButtons';
import ChapterPageButtonText from './ChapterPageButtonText';
import { ChapterNavigator, VideoFun } from '../../Functions/Services';

const OneVideoButton = ( {content_info} ) => {

    const {subject, chapter, video_id} = useParams()
    const navigate = useNavigate()


    console.log('under the chapter content type portion button ', subject, chapter, video_id)

    return (
        <button className='subject' onClick={() =>
            ChapterNavigator(subject, chapter,  navigate, content_info.video_id)
        }
        >
        <div className='accordianDiv'>

            <ChapterPageVideoButton content_info={content_info} />
            <ChapterPageButtonText content_info={content_info} />

        </div>
    </button>
    );
};

export default OneVideoButton;