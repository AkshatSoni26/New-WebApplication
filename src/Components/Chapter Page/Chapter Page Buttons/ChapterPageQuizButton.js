import React from 'react';
import { DefaultThumbnails } from '../../../Constants/Constants';

const ChapterPageQuizButton = ({ content_info }) => {

    console.log('ChapterPageQuizButton')
    
    return (
        <div> <img className='accordianImage'
            src={
                (content_info?.thumbnail)
                    ?
                    content_info.thumbnail
                    :
                    DefaultThumbnails.quiz
            } />
        </div>

    );
};

export default ChapterPageQuizButton;