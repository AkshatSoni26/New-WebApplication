import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import { chapterTable } from '../../../Constants/Constants';
import { Accordion } from 'react-bootstrap';

const ChapterPageSideBarResponsivePart = () => {
    const learn = useSelector(state => state.learn); // Add missing import and semicolon
    const chapterContent = learn.content;
    console.log('ChapterPageNavBar', learn);


    return (
        <div className='ChapterSideResp'>
            {
                chapterTable.map(

                    (chapterData, index) => {

                        return (
                            <div>
                                <button className='subject'>
                                    {chapterData}
                                </button>
                            </div>
                        )
                    }


                )
            }
        </div>
    );
};

export default ChapterPageSideBarResponsivePart;
