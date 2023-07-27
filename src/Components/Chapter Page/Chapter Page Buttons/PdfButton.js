import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChapterPageVideoButton from './ChapterPageVideoButtons';
import ChapterPageButtonText from './ChapterPageButtonText';
import ChapterPagePDFButton from './ChapterPagePDFButton';



const OneVideoButton = ({ content_info }) => {

    console.log('OneVideoButton')

    const navigate = useNavigate()

    const [urlPar, setUrlPar] = useState([])

    const currentUrl = window.location.href;

    useEffect(
        () => {
            const urlSegments = currentUrl.split('/');

            setUrlPar(
                [urlSegments[urlSegments.length - 3], urlSegments[urlSegments.length - 2]]
            )

        }, [currentUrl]
    )



    return (
        <button className='subject' onClick={
            () => { navigate(`/${urlPar[0]}/${urlPar[1]}/${window.btoa('PDF')}`, {state: content_info})
        }
            }>
            <div 
            id={`${content_info.video_id}`} 
            className='accordianDiv'>

                <ChapterPagePDFButton content_info={content_info} />
                <ChapterPageButtonText content_info={content_info} />

            </div>
        </button>
    );
};

export default memo(OneVideoButton);