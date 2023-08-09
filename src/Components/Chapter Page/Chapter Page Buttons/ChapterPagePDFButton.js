import React from 'react';
import { DefaultThumbnails } from '../../../Constants/Constants';

const ChapterPagePDFButton = ( {content_info} ) => {

    console.log('ChapterPagePDFButton')

    return (
        <div className="VidThum">

            <img className='accordianImage '
            src={
                (content_info?.thumbnail)
                    ?
                    content_info.thumbnail
                    :
                    DefaultThumbnails.pdf
            } />
            
        </div>
    );
};

export default ChapterPagePDFButton;