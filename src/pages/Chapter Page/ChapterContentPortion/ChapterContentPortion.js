import React, { useEffect, useState } from 'react';
import VideoPlayer from '../../../Components/Video player/VideoPLayer';
import { useParams } from 'react-router-dom';

const ChapterContentPortion = () => {

    console.log('ChapterContentPortion')

    return (
        <div className='ChapterCon'>
            <VideoPlayer />
         </div>
    );
};

export default ChapterContentPortion;