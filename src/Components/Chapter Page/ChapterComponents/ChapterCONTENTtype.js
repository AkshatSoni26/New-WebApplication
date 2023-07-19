import React from 'react';
import ChapterPagePDFButton from '../Chapter Page Buttons/ChapterPagePDFButton';
import ChapterPageQuizButton from '../Chapter Page Buttons/ChapterPageQuizButton';
import ChapterPageButtonText from '../Chapter Page Buttons/ChapterPageButtonText';
import OneVideoButton from '../Chapter Page Buttons/OneVideoButton';


// only sending content_info
const ChapterContentType = ({ content_data }) => {

    console.log('ChapterContentType1111111111')

        return (
        <div>

            {
                content_data?.content_type == "VIDEO" &&
                content_data?.content_info?.video_id  &&

                <OneVideoButton content_info={content_data.content_info}/>

            }


            {
                content_data?.content_type == "PDF" &&
                content_data?.content_info &&
                content_data?.content_info?.original_file_url &&

                <button className='subject' >
                    <div className='accordianDiv'>

                        <ChapterPagePDFButton content_info={content_data.content_info} />
                        <ChapterPageButtonText content_info={content_data.content_info} />

                    </div>
                </button>
            }


            {
                content_data?.content_type == "QUIZ" &&
                content_data?.content_info.display_name &&

                <button className='subject' >
                    <div className='accordianDiv'>

                        <ChapterPageQuizButton content_info={content_data.content_info} />
                        <ChapterPageButtonText content_info={content_data.content_info} />

                    </div>
                </button>
            }




        </div>
    );
};

export default ChapterContentType;