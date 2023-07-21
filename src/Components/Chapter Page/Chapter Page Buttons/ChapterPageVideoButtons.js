import React, { memo, useEffect, useState } from 'react';
import { DefaultThumbnails } from '../../../Constants/Constants';
import '../../../CSS/App.css'
import ThumbnailDur from '../../Thumbnail/ThumbnailDur';
import ThumbanailButton from '../../Thumbnail/ThumbanailButton';
import Register from '../../Register/Register';



const ChapterPageVideoButton = ({ content_info, currentUrl }) => {

    console.log('ChapterPageVideoButton')

    const [urlPar, setUrlPar] = useState()

    
    
    useEffect(
        () => {
            console.log('ChapterPageVideoButton useEffect')
            const urlSegments = currentUrl.split('/');

            setUrlPar(
                urlSegments[urlSegments.length - 1]
            )

        }, [currentUrl]
    )


    return (

        (currentUrl)

            ?

            <div className='VidThum'>

                <img className='accordianImage'
                    src={
                        (content_info?.thumbnail)
                            ?
                            content_info.thumbnail
                            :
                            DefaultThumbnails.video
                    }
                    alt=''
                />

                {
                    (
                        urlPar === content_info.video_id
                    )
                        ?

                        <Register />
                        :
                        <ThumbanailButton />
                }

                <ThumbnailDur duration={content_info.duration} />

            </div>

            :

            <>Loading...</>

    );
};

export default memo(ChapterPageVideoButton);