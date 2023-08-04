import React from 'react';
import ChapterPageSideBar from './ChapterPageSideBar/ChapterPageSideBar';
import ChapterContentPortion from './ChapterContentPortion/ChapterContentPortion';
import ChapterPageSideBarResponsivePart from './ChapterPageSideBar/ChapterPageSideBarResponsivePart';

const ChapterMainCom = () => {
    return (
        <div className='contentSep'>


            <ChapterPageSideBar />

            <ChapterPageSideBarResponsivePart />

            <ChapterContentPortion />

        </div>
    );
};

export default ChapterMainCom;