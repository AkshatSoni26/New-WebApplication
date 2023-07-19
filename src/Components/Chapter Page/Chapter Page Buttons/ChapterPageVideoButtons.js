import React from 'react';
import { DefaultThumbnails } from '../../../Constants/Constants';

const ChapterPageVideoButton = ({content_info}) => {

    console.log('ChapterPageVideoButton')
    
    return (
        <div>
            <img className='accordianImage'
                src={
                    (content_info?.thumbnail)
                        ?
                        content_info.thumbnail
                        :
                        DefaultThumbnails.video
                } />
        </div>

    );
};

export default ChapterPageVideoButton;