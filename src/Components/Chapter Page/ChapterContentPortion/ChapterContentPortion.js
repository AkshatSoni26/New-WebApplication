import React, { useEffect, useState } from 'react';
import VideoPlayer from '../../Video player/VideoPLayer';
import { useParams } from 'react-router-dom';

const ChapterContentPortion = ({ chapterContent }) => {

    console.log('ChapterContentPortion', chapterContent)

    const parms = useParams()
    console.log('under the chapter content portion', parms)

    const [contentData, setContentData] = useState( 
        chapterContent.learn[0]
        ?
         chapterContent.learn[0].content_data.content_info
        :
        ''
        )

    return (
        <div className='ChapterContent'>
            {/* <div >
                <img className='ChapterMainImage' src={contentData.thumbnail} />
            </div>

            <div className='chapterContDat'> {contentData.name} </div> */}
            
            <VideoPlayer />
            
        </div>
    );
};

export default ChapterContentPortion;