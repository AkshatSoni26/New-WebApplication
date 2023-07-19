import React, { memo, useDebugValue } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ChapterPageVideoButton from './ChapterPageVideoButtons';
import ChapterPageButtonText from './ChapterPageButtonText';
import { ChapterNavigator, VideoFun } from '../../Functions/Services';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../State';

const OneVideoButton = ( {content_info} ) => {

    const {subject, chapter} = useParams()
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { re_video_id } = bindActionCreators(actionCreators, dispatch)


    console.log('under the chapter content type portion button ', subject, chapter)

    return (
        <button className='subject' onClick={() =>
            {
                ChapterNavigator(subject, chapter,  navigate, content_info.video_id)
                // re_video_id( content_info.video_id )
            }
            
        }
        // VideoFun( navigate,subject, chapter, content_info.video_id)} 
        >
        <div className='accordianDiv'>

            <ChapterPageVideoButton content_info={content_info} />
            <ChapterPageButtonText content_info={content_info} />

        </div>
    </button>
    );
};

export default memo(OneVideoButton);