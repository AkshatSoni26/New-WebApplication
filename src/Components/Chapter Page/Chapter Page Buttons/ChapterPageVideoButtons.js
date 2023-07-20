import React, { memo, useEffect, useState } from 'react';
import { DefaultThumbnails } from '../../../Constants/Constants';
import '../../../CSS/App.css'
import { toHoursAndMinutes } from '../../Functions/Services';
import ThumbnailDur from '../../Thumbnail/ThumbnailDur';
import ThumbanailButton from '../../Thumbnail/ThumbanailButton';
// import playButton from ''



const ChapterPageVideoButton = ({ content_info }) => {

    console.log('ChapterPageVideoButton')

    // const [time, setTime] = useState(toHoursAndMinutes(content_info.duration))

    // let time = toHoursAndMinutes(content_info.duration)
 



    return (

            <div className='VidThum'>

                <img className='accordianImage'
                    src={
                        (content_info?.thumbnail)
                            ?
                            content_info.thumbnail
                            :
                            DefaultThumbnails.video
                    }
                />

                <ThumbanailButton />

                <ThumbnailDur duration={content_info.duration} />

            </div>

    );
};

export default memo(ChapterPageVideoButton);