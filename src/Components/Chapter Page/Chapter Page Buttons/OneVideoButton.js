import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChapterPageVideoButton from './ChapterPageVideoButtons';
import ChapterPageButtonText from './ChapterPageButtonText';



const OneVideoButton = ({ content_info }) => {

    console.log('OneVideoButton')

    const navigate = useNavigate()

    const [urlPar, setUrlPar] = useState([])

    useEffect(
        () => {
            const currentUrl = window.location.href;
            const urlSegments = currentUrl.split('/');

            setUrlPar(
                [urlSegments[urlSegments.length - 3], urlSegments[urlSegments.length - 2]]
            )

        }, []
    )



    return (
        <button className='subject' onClick={
            () => { navigate(`/${urlPar[0]}/${urlPar[1]}/${content_info.video_id}`)
        }
            }>
            <div 
            id={`${content_info.video_id}`} 
            className='accordianDiv'>

                <ChapterPageVideoButton content_info={content_info} />
                <ChapterPageButtonText content_info={content_info} />

            </div>
        </button>
    );
};

export default memo(OneVideoButton);