import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ChapterContentPortion = ( { chapterContent } ) => {

    // const learn = useSelector(state => state.learn)

    const [contentData, setContentData ] = useState(chapterContent.learn[0].content_data.content_info)

    // console.log('learn data under the chapter content portion', learn)

    // useEffect(
    //     () => {

    //         setContentData(chapterContent.learn[2].content_data.content_info)
    //     },[]
    // )


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