import React, { useEffect, useState } from 'react';

const ChapterContentPortion = ({ chapterContent }) => {

    console.log('ChapterContentPortion', chapterContent)

    const [contentData, setContentData] = useState( 
        chapterContent.learn[0]
        ?
         chapterContent.learn[0].content_data.content_info
        :
        ''
        )

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