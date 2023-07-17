import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ChapterContentPortion = ( { chapterContent } ) => {

    console.log('111111111111111')

    const [contentData, setContentData ] = useState(chapterContent.learn[0].content_data.content_info)

    return (
        <div className='ChapterContent'>
            <div >
                <img className='ChapterMainImage' src={contentData.thumbnail} />
            </div>

            <div className='chapterContDat'> {contentData.name} </div>
        </div>
    );
};

export default ChapterContentPortion;