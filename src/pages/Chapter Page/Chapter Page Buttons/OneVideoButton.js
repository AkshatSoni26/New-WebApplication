import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChapterPageVideoButton from './ChapterPageVideoButtons';
import ChapterPageButtonText from './ChapterPageButtonText';


const OneVideoButton = ({ content_info }) => {

    console.log('OneVideoButton')

    const navigate = useNavigate()

    const [urlPar, setUrlPar] = useState([])
    const currentUrl = window.location.href;

    useEffect(
        () => {
            const urlSegments = currentUrl.split('/').slice(3,);
            console.log('urlSegments', urlSegments)

            var a = ''
            var n = 0

            while (n < (urlSegments.length - 1)) {
                if (a == '') {
                    a = urlSegments[n]
                }
                else {
                    a = a + '/' + urlSegments[n]
                }
                n++
            }
            setUrlPar(a)

        }, [currentUrl]
    )



    return (
        <div className='subject accordianDiv' onClick={
            () => {
                navigate(`/${urlPar}/${content_info.video_id}`)
            }}
                id={`${content_info.video_id}`}>

                <ChapterPageVideoButton content_info={content_info} currentUrl={currentUrl} />
                <ChapterPageButtonText content_info={content_info} />

        </div>
    );
};

export default memo(OneVideoButton);