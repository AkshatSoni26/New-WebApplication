import React from 'react';
import ChapterPageSideBar from './ChapterPageSideBar/ChapterPageSideBar';
import ChapterContentPortion from './ChapterContentPortion/ChapterContentPortion';

const ChapterMainCom = () => {
    return (
        <div className='contentSep'>
            <ChapterPageSideBar />
            <ChapterContentPortion />
        </div>
    );
};

export default ChapterMainCom;