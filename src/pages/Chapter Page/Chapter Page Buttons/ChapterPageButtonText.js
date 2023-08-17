import React, { memo } from 'react';

const ChapterPageButtonText = ( {content_info} ) => {

    console.log('ChapterPageButtonText')
    return (
        (content_info && content_info.name) &&
        <div className='accordianContent'>
            {content_info.name}
        </div>
    );
};

export default memo(ChapterPageButtonText);