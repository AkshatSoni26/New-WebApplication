import React, { memo } from 'react';
import ChapterPagePDFButton from '../Chapter Page Buttons/ChapterPagePDFButton';
import ChapterPageQuizButton from '../Chapter Page Buttons/ChapterPageQuizButton';
import ChapterPageButtonText from '../Chapter Page Buttons/ChapterPageButtonText';
import OneVideoButton from '../Chapter Page Buttons/OneVideoButton';
import PdfButton from '../Chapter Page Buttons/PdfButton';


// only sending content_info
const ChapterContentType = ({ content_data }) => {

    console.log('ChapterContentType1111111111')

    const getContent = (content_data) => {
        if (content_data?.content_type === "VIDEO" && content_data?.content_info?.video_id) {
            return <OneVideoButton content_info={content_data.content_info} />
        }
        if (content_data?.content_type === "PDF" && content_data?.content_info && content_data?.content_info?.original_file_url) {
            return <button className='subject' >
                <div className='accordianDiv'>
                    <PdfButton content_info={content_data.content_info} />
                </div>
            </button>
        }
        if (content_data?.content_type === "QUIZ" && content_data?.content_info.display_name) {
            return <button className='subject' >
                <div className='accordianDiv'>
                    <ChapterPageQuizButton content_info={content_data.content_info} />
                    <ChapterPageButtonText content_info={content_data.content_info} />
                </div>
            </button>
        }
    }

    return (
        <>
            {getContent(content_data)}
        </>
    );
};
export default memo(ChapterContentType);