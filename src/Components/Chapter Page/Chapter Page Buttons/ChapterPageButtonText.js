import React from 'react';

const ChapterPageButtonText = ( {content_info} ) => {
    return (
        (content_info.name) &&
        <div className='accordianContent'>
            {content_info.name}
        </div>
    );
};

export default ChapterPageButtonText;