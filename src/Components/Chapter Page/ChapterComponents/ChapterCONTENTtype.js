import React from 'react';
import { DefaultThumbnails } from '../../../Constants/Constants';

// only sending content_info
const ChapterContentType = ({ content_data }) => {

    console.log('ChapterContentType')
    return (
        <div>

            <button className='subject' >
                <div className='accordianDiv'>

                    {content_data?.content_type == "VIDEO" &&

                        <div> <img className='accordianImage'
                            src={
                                (content_data?.content_info?.thumbnail)
                                    ?
                                    content_data.content_info.thumbnail
                                    :
                                    DefaultThumbnails.video
                            } />
                        </div>
                    }

                    {content_data?.content_type == "PDF" && content_data?.content_info && content_data?.content_info?.original_file_url &&

                        <div> <img className='accordianImage '
                            src={
                                (content_data?.content_info?.thumbnail)
                                    ?
                                    content_data.content_info.thumbnail
                                    :
                                    DefaultThumbnails.pdf
                            } />
                        </div>
                    }

                    {
                        content_data?.content_type == "QUIZ" && content_data?.content_info.display_name &&

                        <div> <img className='accordianImage'
                            src={
                                (content_data?.content_info?.thumbnail)
                                    ?
                                    content_data.content_info.thumbnail
                                    :
                                    DefaultThumbnails.quiz
                            } />
                        </div>
                        
                    }


                    {
                        (content_data.content_info.name) && <div className='accordianContent'>
                            {content_data.content_info.name}</div>
                    }

                </div>
            </button>

        </div>
    );
};

export default ChapterContentType;